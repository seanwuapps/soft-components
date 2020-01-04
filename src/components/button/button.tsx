import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h
} from "@stencil/core";
/**
 * @slot - Content is placed between the named slots if provided without a slot.
 */
@Component({
  tag: "sc-button",
  styleUrl: "button.scss"
  // shadow: true // disabled for form submission
})
export class Button {
  @Element() el!: HTMLElement;

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflectToAttr: true }) disabled = false;

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined;

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined;

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined;

  /**
   * The button shape.
   */
  @Prop({ reflectToAttr: true }) block?: boolean | undefined = false;

  /**
   * Icon only button
   */
  @Prop({ reflectToAttr: true }) icon?: boolean | undefined = false;

  /**
   * If prop exists, button will have an engraved-styled border
   */
  @Prop({ reflectToAttr: true }) bordered?: boolean | undefined = false;

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined;

  /**
   * The type of the button.
   */
  @Prop() type: "submit" | "reset" | "button" = "button";

  /**
   * Emitted when the button has focus.
   */
  @Event() focusEvent!: EventEmitter<void>;

  /**
   * Emitted when the button loses focus.
   */
  @Event() blurEvent!: EventEmitter<void>;

  /**
   * Emitted when the button is clicked.
   */
  @Event() clickEvent!: EventEmitter<void>;

  private onFocus = () => {
    this.focusEvent.emit();
  };

  private onBlur = () => {
    this.blurEvent.emit();
  };

  private onClick = () => {
    this.clickEvent.emit();
  };

  render() {
    const { type, disabled, rel, target, href, icon, block, bordered } = this;
    const TagType = href === undefined ? "button" : "a";
    const attrs =
      TagType === "button"
        ? { type }
        : {
            download: this.download,
            href,
            rel,
            target
          };

    return (
      <Host
        aria-disabled={disabled ? "true" : null}
        class={{
          icon,
          block,
          bordered
        }}
      >
        <TagType
          {...attrs}
          disabled={disabled}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onClick={this.onClick}
        >
          <span class="button-inner">
            <slot name="start"></slot>
            <slot></slot>
            <slot name="end"></slot>
          </span>
        </TagType>
      </Host>
    );
  }
}
