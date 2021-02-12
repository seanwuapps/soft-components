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
  private rotation: number = 0

  /**
   * total steps of one full circle (360 deg)
   */
  private total: number
  private oneStepDeg: number

  @Method()
  async setValue(value) {
    const { min, max, step } = this
    if (typeof min !== 'undefined' && value < min) {
      this.value = min
      return
    }
    if (typeof max !== 'undefined' && value > max) {
      this.value = max
      return
    }
    this.value = Math.ceil(value / step) * step

    this.rotation = ((this.value % this.total) / this.total) * 360
  }

  private centerX: number
  private centerY: number

  componentDidLoad() {
    const elBox = this.hostEl.getBoundingClientRect()
    const { min, max, step } = this
    this.total = 100 * step
    if (typeof min !== 'undefined' && typeof max !== 'undefined') {
      this.total = max - min
    }

    this.oneStepDeg = (step / this.total) * 360
    console.log({ oneStepDeg: this.oneStepDeg })
    this.centerX =
      Math.floor(elBox.left) + document.body.scrollLeft + elBox.width / 2
    this.centerY =
      Math.floor(elBox.top) + document.body.scrollTop + elBox.height / 2
    this.setValue(this.value)

    this.hostEl.addEventListener('mousewheel', e => this.handleScroll(e))
    this.hostEl.addEventListener('touchstart', () =>
      this.handleMoveStart('touchmove', 'touchend')
    )
    this.hostEl.addEventListener('mousedown', () =>
      this.handleMoveStart('mousemove', 'mouseup')
    )
  }
  disconnectedCallback() {
    this.hostEl.removeEventListener('mousewheel', this.handleScroll.bind(this))
  }

  handleScroll(e) {
    e.preventDefault()

    const deltaX = -e.detail || e.wheelDeltaX
    const deltaY = -e.detail || e.wheelDeltaY
    const direction =
      deltaX > 0 || deltaY < 0 ? 1 : deltaX < 0 || deltaY > 0 ? -1 : 0
    direction < 0 ? this.stepUp() : this.stepDown()
  }

  handleMoveStart(onMove, onEnd) {
    const fnc = this.updateOnMove.bind(this)
    const body = document.body
    body.addEventListener(onMove, fnc, false)
    body.addEventListener(
      onEnd,
      () => {
        body.removeEventListener(onMove, fnc, false)
      },
      false
    )
  }
  private lastDeg: number = 0
  @State() cycles: number = 0

  updateOnMove(event) {
    event.preventDefault()
    const e = event.changedTouches ? event.changedTouches[0] : event
    const x = e.pageX
    const y = e.pageY

    const diffX = this.centerX - x
    const diffY = this.centerY - y
    const angleRad = Math.atan2(diffY, diffX) //rad
    let angleDeg = (angleRad * 180) / Math.PI + 90

    if (angleDeg < 0) {
      angleDeg += 360
    }
    const degDiff = angleDeg - this.lastDeg

    console.log({ angleDeg })
    // 359 to 1
    if (angleDeg >= 360 - this.oneStepDeg && degDiff > 0) {
      if (this.max) {
        return
      }
      // trigger over 1 cycle
      this.cycles += 1
    }

    // 1 to 359
    if (angleDeg <= this.oneStepDeg) {
      if (this.min) {
        console.log('yo')
        return
      }
      this.cycles -= 1
    }
    if (degDiff > this.oneStepDeg) {
      this.stepUp(degDiff)
      this.lastDeg = angleDeg
    }

    if (degDiff < -1 * this.oneStepDeg) {
      this.stepDown(degDiff)
      this.lastDeg = angleDeg
    }

    // const newPercent = angleDeg / 360
    // const newVal = newPercent * this.max
    // console.log({ percent: this.percent, newPercent, released: this.released })
    // if (!this.released) {
    //   this.setValue(newVal)
    // }
  }

  private getNewValueFromDegDiff(degDiff) {
    console.log({ degDiff })
    return this.value + (degDiff / 360) * this.total
  }

  private stepUp(degDiff = null) {
    const newVal = degDiff
      ? this.getNewValueFromDegDiff(degDiff)
      : this.value + this.step
    this.setValue(newVal)
  }
  private stepDown(degDiff = null) {
    const newVal = degDiff
      ? this.getNewValueFromDegDiff(degDiff)
      : this.value - this.step
    this.setValue(newVal)
  }

  render() {
    const { value, size, rotation, cycles } = this
    return (
      <Host style={{ '--sc-dial-size': `${size}px` }}>
        <div class="dial-circle">
          <div class="pointer" style={{ '--sc-dial-angle': `${rotation}deg` }}>
            ▲
          </div>
        </div>
        {value}
        Cycles {cycles}
      </Host>
    )
  }
}
