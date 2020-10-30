import { Component, Host, h, Prop, Event, EventEmitter, State } from '@stencil/core'

@Component({
  tag: 'sc-toggle',
  styleUrl: 'sc-toggle.scss',
  // shadow: true
})
export class Toggle {
  /**
   * Label text to be displayed inline with the toggle
   */
  @Prop() label!: string | undefined

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = ''

  /**
   * aria labelby
   */
  @Prop({ reflect: true }) ariaLabelledby?: string = ''

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = ''

  /**
   * Size of toggle
   */
  @Prop() size?: 'lg' | 'sm' = 'lg'



  @State() isFocused: boolean = false;

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
  @Event() keyDownEvent: EventEmitter<KeyboardEvent>

  /**
   * If this toggle is on by default
   */
  @Prop({ reflect: true, mutable: true }) checked?: boolean | undefined = false

  private onInput = e => {
    this.inputEvent.emit(e)
  }

  private onBlur = () => {
    this.isFocused = false
    this.blurEvent.emit()
  }

  private onFocus = () => {
    this.isFocused = true
    this.focusEvent.emit()
  }

  private onKeydown = (e: KeyboardEvent) => {
    if(this.isFocused && e.key === 'Enter'){
      e.preventDefault();
      this.checked = !this.checked
    }
    this.keyDownEvent.emit(e);
  }

  private onChange = e => {
    this.changeEvent.emit(e)
  }

  private getValue(): string {
    return this.value || ''
  }

  render() {
    const value = this.getValue()
    const {size, ariaLabelledby, disabled, autofocus, name, checked} = this
    return (
      <Host aria-disabled={this.disabled ? 'true' : null} class={{'sm': size === 'sm'}}>
        <label>
          <span class="toggle">
            <input
              type="checkbox"
              aria-labelledby={ariaLabelledby}
              disabled={disabled}
              autoFocus={autofocus}
              name={name}
              checked={checked}
              value={value}
              onInput={this.onInput}
              onBlur={this.onBlur}
              onFocus={this.onFocus}
              onKeyDown={this.onKeydown}
              onChange={this.onChange}
            />
            <span class="toggle--slider">
            <span class="toggle--btn">
              <span class="toggle--dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
          </span>
          </span>
          {this.label && <span class="toggle--label">{this.label}</span>}
        </label>
      </Host>
    )
  }
}
