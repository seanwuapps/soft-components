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
   * Radius in pixels (can be changed via CSS variable --sc-dial-radius)
   */
  @Prop() radius?: number = 50

  /**
   * Max value of dial
   */
  @Prop() max?: number = 100

  /**
   * Min value of dial
   */
  @Prop() min?: number = 0

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

  @Method()
  async setValue(value) {
    const { min, max, step } = this
    if (value < min) {
      this.value = min
    } else if (value > max) {
      this.value = max
    } else {
      this.value = Math.ceil(value / step) * step
    }

    this.percent = (this.value / (max - min)) * 100
    this.rotation = (this.percent * 360) / 100
  }

  private centerX: number
  private centerY: number

  componentDidLoad() {
    const elBox = this.hostEl.getBoundingClientRect()
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

    var deltaX = -e.detail || e.wheelDeltaX
    var deltaY = -e.detail || e.wheelDeltaY
    var direction =
      deltaX > 0 || deltaY < 0 ? 1 : deltaX < 0 || deltaY > 0 ? -1 : 0
    this.setValue(this.value + direction * this.step)
  }

  private released: boolean = true
  handleMoveStart(onMove, onEnd) {
    this.released = false
    var fnc = this.updateOnMove.bind(this)
    var body = document.body
    body.addEventListener(onMove, fnc, false)
    body.addEventListener(
      onEnd,
      () => {
        this.released = true
        body.removeEventListener(onMove, fnc, false)
      },
      false
    )
  }

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
    angleDeg = angleDeg % 360

    const newPercent = angleDeg / 360
    const newVal = newPercent * this.max
    console.log({ percent: this.percent, newPercent, released: this.released })
    if (!this.released) {
      this.setValue(newVal)
    }
  }

  render() {
    const { percent, rotation, value, radius } = this
    return (
      <Host>
        <div class="dial-circle" style={{ '--sc-dial-radius': `${radius}px` }}>
          <div class="pointer" style={{ '--sc-dial-angle': `${rotation}deg` }}>
            ▲
          </div>
        </div>
        {value}
      </Host>
    )
  }
}
