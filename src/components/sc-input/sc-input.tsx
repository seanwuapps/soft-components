import {
  Component,
  ComponentInterface,
  Host,
  h,
  Prop,
  // Element,
  Event,
  EventEmitter,
  Method,
  State,
} from "@stencil/core";
import { validityMessages } from "../../utils/validity-messages";

@Component({
  tag: "sc-input",
  styleUrl: "sc-input.scss",
})
export class Input implements ComponentInterface {
  // @Element() el!: HTMLElement;
  private nativeInput?: HTMLInputElement;

  /**
   * If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.
   */
  @Prop() accept?: string;

  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   */
  @Prop() autocapitalize = "off";

  /**
   * Indicates whether the value of the control can be automatically completed by the browser.
   */
  @Prop() autocomplete: "on" | "off" = "off";

  /**
   * Whether auto correction should be enabled when the user is entering/editing the text value.
   */
  @Prop() autocorrect: "on" | "off" = "off";

  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  @Prop() autofocus = false;

  /**
   * If `true`, the user cannot interact with the input.
   */
  @Prop() disabled = false;

  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  @Prop() inputmode?:
    | "none"
    | "text"
    | "tel"
    | "url"
    | "email"
    | "numeric"
    | "decimal"
    | "search";

  /**
   * The maximum value, which must not be less than its minimum (min attribute) value.
   */
  @Prop() max?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.
   */
  @Prop() maxlength?: number;

  /**
   * The minimum value, which must not be greater than its maximum (max attribute) value.
   */
  @Prop() min?: string;

  /**
   * If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.
   */
  @Prop() minlength?: number;

  /**
   * If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.
   */
  @Prop() multiple?: boolean;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = "";

  /**
   * A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @Prop() pattern?: string;

  /**
   * Instructional text that shows before the input has a value.
   */
  @Prop() placeholder?: string | null;

  /**
   * If `true`, the user cannot modify the value.
   */
  @Prop() readonly = false;

  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  @Prop() required = false;

  /**
   * Works with the min and max attributes to limit the increments at which a value can be set.
   * Possible values are: `"any"` or a positive floating point number.
   */
  @Prop() step?: string;

  /**
   * The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.
   */
  @Prop() size?: number;

  /**
   * The type of control to display. The default type is text.
   */
  @Prop() type: string = "text";

  /**
   * The value of the input.
   */
  @Prop({ mutable: true }) value?: string | null = "";

  /**
   * Aria labelby
   */
  @Prop({ reflect: true }) ariaLabelledby?: string = "";

  /**
   * Engrave level (0-9) note if 0 there will be no visible border around the element, so you'll need to add border via css.
   */
  @Prop() engraved?: number = 1;

  /**
   * Takes the entire width of the row
   */
  @Prop() block?: boolean = false;

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
   * Sets focus on the specified `sc-input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }

  /**
   * Returns the native `<input>` element used under the hood.
   */
  @Method()
  getInputElement(): Promise<HTMLInputElement> {
    return Promise.resolve(this.nativeInput!);
  }

  @State() error: string = "";

  @State() focused: boolean = false;

  private getValue(): string {
    return this.value || "";
  }

  private onInput = (ev: Event) => {
    const input = ev.target as HTMLInputElement | null;
    if (input) {
      this.value = input.value || "";
    }
    for (var key in input.validity) {
      if (input.validity[key]) {
        if (key === "valid") {
          this.error = "";
          break;
        }
        this.error = validityMessages(this)[key] || ""; // "" catch all
        break;
      }
    }
    this.inputEvent.emit(ev as KeyboardEvent);
  };

  private onBlur = () => {
    this.blurEvent.emit();
    this.focused = false;
  };

  private onFocus = () => {
    this.focusEvent.emit();
    this.focused = true;
  };

  private onKeydown = () => {
    this.keyDownEvent.emit();
  };

  private hasValue(): boolean {
    return this.getValue().length > 0;
  }

  render() {
    const value = this.getValue();

    const engravedLevel = this.focused ? this.engraved + 1 : this.engraved;
    return (
      <Host
        aria-disabled={this.disabled ? "true" : null}
        class={{
          "has-value": this.hasValue(),
          "has-error": this.error.length > 0,
          block: this.block,
        }}
      >
        <input
          class={`engraved-${engravedLevel}`}
          ref={(input) => (this.nativeInput = input)}
          aria-labelledby={this.ariaLabelledby}
          disabled={this.disabled}
          accept={this.accept}
          autoCapitalize={this.autocapitalize}
          autoComplete={this.autocomplete}
          autoCorrect={this.autocorrect}
          autoFocus={this.autofocus}
          inputMode={this.inputmode}
          min={this.min}
          max={this.max}
          minLength={this.minlength}
          maxLength={this.maxlength}
          multiple={this.multiple}
          name={this.name}
          pattern={this.pattern}
          placeholder={this.placeholder || ""}
          readOnly={this.readonly}
          required={this.required}
          step={this.step}
          size={this.size}
          type={this.type}
          value={value}
          onInput={this.onInput}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          onKeyDown={this.onKeydown}
          onChange={(e) => this.changeEvent.emit(e)}
        />

        {this.error && this.error.length > 0 && (
          <div class="error-message">{this.error}</div>
        )}
      </Host>
    );
  }
}
