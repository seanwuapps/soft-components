import { Component, Host, h, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "sc-toggle",
  styleUrl: "sc-toggle.scss",
  // shadow: true
})
export class Toggle {
  /**
   * Label text to be displayed inline with the toggle
   */
  @Prop() label!: string | undefined;

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = "";

  /**
   * aria labelby
   */
  @Prop({ reflect: true }) ariaLabelledby?: string = "";

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = "";

  /**
   * Emitted when a keyboard input occurred.
   */
  @Event() inputEvent!: EventEmitter<KeyboardEvent>;

  /**
   * Emitted when the value has changed.
   */
  @Event() changeEvent!: EventEmitter<any>;

  /**
   * Emitted when the input loses focus.
   */
  @Event() blurEvent!: EventEmitter<void>;

  /**
   * Emitted when the input has focus.
   */
  @Event() focusEvent!: EventEmitter<void>;

  /**
   * Emitted when a key is pressed down
   */
  @Event() keyDownEvent: EventEmitter<void>;

  /**
   * If this toggle is on by default
   */
  @Prop({ reflect: true }) checked?: boolean | undefined = false;

  private onInput = (e) => {
    this.inputEvent.emit(e);
  };

  private onBlur = () => {
    this.blurEvent.emit();
  };

  private onFocus = () => {
    this.focusEvent.emit();
  };

  private onKeydown = () => {
    this.keyDownEvent.emit();
  };

  private onChange = (e) => {
    this.changeEvent.emit(e);
  };

  private getValue(): string {
    return this.value || "";
  }

  render() {
    const value = this.getValue();
    return (
      <Host aria-disabled={this.disabled ? "true" : null}>
        <label class="toggle">
          <input
            type="checkbox"
            aria-labelledby={this.ariaLabelledby}
            disabled={this.disabled}
            autoFocus={this.autofocus}
            name={this.name}
            value={value}
            onInput={this.onInput}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onKeyDown={this.onKeydown}
            onChange={this.onChange}
            checked={this.checked}
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
        </label>
        {this.label && <span class="toggle--label">{this.label}</span>}
      </Host>
    );
  }
}
