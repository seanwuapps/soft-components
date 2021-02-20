import {
  Component,
  Host,
  h,
  Prop,
  Event,
  EventEmitter,
  State,
  Method,
  Element,
} from '@stencil/core'
// import { validityMessages } from '../../utils/validity-messages'
import throttle from 'lodash.throttle'
@Component({
  tag: 'sc-dial',
  styleUrl: 'sc-dial.scss',
  shadow: true,
})
export class ScDial {
  @Element() hostEl: HTMLElement

  @Prop({ mutable: true }) value?: number | null = 50

  /**
   * Diameter in pixels (can be changed via CSS variable --sc-dial-size)
   */
  @Prop() size?: number = 80

  /**
   * Max value of dial
   */
  @Prop() max?: number

  /**
   * Min value of dial
   */
  @Prop() min?: number

  /**
   * Step value of each change
   */
  @Prop() step?: number = 1

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() inputEvent!: EventEmitter<KeyboardEvent>

  /**
   * Emitted when the value has changed.
   */
  @Event() changeEvent!: EventEmitter<any>

  /**
   * Emitted when the input loses focus.
   */
  @Event() blurEvent!: EventEmitter<void>

  /**
   * Emitted when the input has focus.
   */
  @Event() focusEvent!: EventEmitter<void>

  /**
   * Emitted when a key is pressed down
   */
  @Event() keyDownEvent: EventEmitter<void>

  @State() error: string = ''

  @State() focused: boolean = false

  @State() percent: number = 0
  @State() rotation: number = 0

  /**
   * total steps of one full circle (360 deg)
   */
  private total: number
  private oneStepDeg: number

  // record the starting state when on mouse down/touchstart
  private startingDeg: number
  private startingValue: number
  @State() degDiff: number

  @State() cycles: number = 0

  private reachedMax: boolean = false
  private reachedMin: boolean = false

  @Method()
  async setValue(value) {
    const { min, max, step } = this
    if (!isNaN(min) && value <= min) {
      this.reachedMin = true
      this.value = min
      return
    }
    if (!isNaN(max) && value >= max) {
      this.reachedMax = true
      this.value = max
      return
    }

    this.value = Math.ceil(value / step) * step
  }

  private setRotationByValue(value) {
    this.rotation = ((value % this.total) / this.total) * 360
  }

  handleScroll(e) {
    e.preventDefault()

    const deltaX = -e.detail || e.wheelDeltaX
    const deltaY = -e.detail || e.wheelDeltaY
    const direction =
      deltaX > 0 || deltaY < 0 ? 1 : deltaX < 0 || deltaY > 0 ? -1 : 0
    direction < 0 ? this.stepUp() : this.stepDown()
  }

  private centerX: number
  private centerY: number
  componentDidLoad() {
    const elBox = this.hostEl.getBoundingClientRect()
    const { min, max, step } = this
    this.total = 36 * step
    if (typeof min !== 'undefined' && typeof max !== 'undefined') {
      this.total = max - min
    }

    this.oneStepDeg = (step / this.total) * 360
    // console.log({ oneStepDeg: this.oneStepDeg })
    this.centerX =
      Math.floor(elBox.left) + document.body.scrollLeft + elBox.width / 2
    this.centerY =
      Math.floor(elBox.top) + document.body.scrollTop + elBox.height / 2
    this.setValue(this.value)
    this.setRotationByValue(this.value)

    this.hostEl.addEventListener('mousewheel', e => this.handleScroll(e))
    this.hostEl.addEventListener('touchstart', e =>
      this.handleMoveStart(e, 'touchmove', 'touchend')
    )
    this.hostEl.addEventListener('mousedown', e =>
      this.handleMoveStart(e, 'mousemove', 'mouseup')
    )
  }
  disconnectedCallback() {
    this.hostEl.removeEventListener('mousewheel', this.handleScroll.bind(this))
  }

  handleMoveStart(e, onMove, onEnd) {
    const fnc = throttle(this.updateOnMove.bind(this), 40)
    const body = document.body
    const { deg } = this.getDegFromPointer(e)
    this.startingDeg = deg
    this.startingValue = this.value

    body.addEventListener(onMove, fnc, false)
    body.addEventListener(
      onEnd,
      () => {
        body.removeEventListener(onMove, fnc, false)
      },
      false
    )
  }

  private quadrant: number
  private lastQuadrant: number

  private mouseDirectionX?: 'left' | 'right' = null
  private mouseDirectionY?: 'up' | 'down' = null

  private mousePrevX?: number = 0
  private mousePrevY?: number = 0

  private getDegFromPointer(event) {
    const e = event.changedTouches ? event.changedTouches[0] : event
    const x = e.pageX
    const y = e.pageY

    // get mouse direction
    if (x < this.mousePrevX) {
      this.mouseDirectionX = 'left'
    }
    if (x > this.mousePrevX) {
      this.mouseDirectionX = 'right'
    }
    if (y < this.mousePrevY) {
      this.mouseDirectionY = 'up'
    }
    if (y > this.mousePrevY) {
      this.mouseDirectionY = 'down'
    }
    this.mousePrevX = x
    this.mousePrevY = y

    // get angle
    const diffX = this.centerX - x
    const diffY = this.centerY - y

    const angleRad = Math.atan2(diffY, diffX) //rad
    let angleDeg = (angleRad * 180) / Math.PI + 90

    if (angleDeg < 0) {
      angleDeg += 360
    }

    return {
      deg: angleDeg,
      x,
      y,
      diffX,
      diffY,
    }
  }

  updateOnMove(event) {
    event.preventDefault()
    const { deg: angleDeg, x, y, diffX, diffY } = this.getDegFromPointer(event)
    // const degDiff = angleDeg - this.lastDeg
    this.degDiff = angleDeg - this.startingDeg
    console.log({ x, y, diffX, diffY })
    // if diff in degree is larger than 1 step, step over
    if (this.degDiff > this.oneStepDeg) {
      if (
        x > this.centerX &&
        y > this.centerY &&
        this.mouseDirectionX === 'left'
      ) {
        console.log('yo')
        // if (!isNaN(this.max)) {
        //   return
        // }
      }
      this.stepUp(this.degDiff)
    }
    if (this.degDiff < -1 * this.oneStepDeg) {
      this.stepDown(this.degDiff)
    }

    // const newPercent = angleDeg / 360
    // const newVal = newPercent * this.max
    // console.log({ percent: this.percent, newPercent, released: this.released })
    // if (!this.released) {
    //   this.setValue(newVal)
    // }
  }

  private valueDiff(degDiff) {
    return Math.floor(degDiff / this.oneStepDeg) * this.step
  }

  private stepUp(degDiff = null) {
    if (this.reachedMax) {
      return
    }
    const newVal = degDiff
      ? this.startingValue + this.valueDiff(degDiff)
      : this.value + this.step
    this.setValue(newVal)
    this.setRotationByValue(newVal)
    this.reachedMin = false
  }
  private stepDown(degDiff = null) {
    if (this.reachedMin) {
      return
    }
    const newVal = degDiff
      ? this.startingValue + this.valueDiff(degDiff)
      : this.value - this.step
    this.setValue(newVal)
    this.setRotationByValue(newVal)
    this.reachedMax = false
  }

  // private updateRotation(direction) {
  //   switch (this.diff) {
  //     case 1:
  //       this.rotation += this.oneStepDeg
  //       break
  //     case -1:
  //       this.rotation -= this.oneStepDeg
  //       break
  //     default:
  //       break
  //   }
  // }

  render() {
    const {
      value,
      size,
      rotation,
      reachedMax,
      reachedMin,
      mouseDirectionX,
      mouseDirectionY,
      startingDeg,
      startingValue,
    } = this
    return (
      <Host style={{ '--sc-dial-size': `${size}px` }}>
        <div class="dial-circle">
          <div class="pointer" style={{ '--sc-dial-angle': `${rotation}deg` }}>
            <div class="pointer-circle"></div>
          </div>

          <div class="temp">
            {value}
            <div>max? {reachedMax ? 'true' : 'false'}</div>
            <div>min? {reachedMin ? 'true' : 'false'}</div>
          </div>
        </div>
      </Host>
    )
  }
}
