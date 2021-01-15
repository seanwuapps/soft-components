import {
  Component,
  Element,
  Event,
  EventEmitter,
  Host,
  Prop,
  h,
} from '@stencil/core'
/**
 * @slot - Content is placed between the named slots if provided without a slot.
 */
@Component({
  tag: 'sc-button',
  styleUrl: 'sc-button.scss',
  // shadow: true // disabled for form submission
})
export class ScButton {
  @Element() el!: HTMLElement

  /**
   * If `true`, the user cannot interact with the button.
   */
  @Prop({ reflect: true }) disabled = false

  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  @Prop() download: string | undefined

  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  @Prop() href: string | undefined

  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  @Prop() rel: string | undefined

  /**
   * Make button `display: block`
   */
  @Prop({ reflect: true }) block?: boolean | undefined = false

  /**
   * Icon only button
   */
  @Prop({ reflect: true }) icon?: boolean | undefined = false

  /**
   * If prop exists, button will have an engraved-styled border
   */
  @Prop({ reflect: true }) bordered?: boolean | undefined = false

  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  @Prop() target: string | undefined

  /**
   * The type of the button.
   */
  @Prop() type: 'submit' | 'reset' | 'button' = 'button'

  /**
   * If this button has both icon and text
   */
  @Prop() iconText?: boolean | undefined = false

  /**
   * Set active state for the button
   */
  @Prop() active?: boolean = false

  /**
   * Make button flat
   */
  @Prop() flat?: boolean = false

  /**
   * Make button circle shaped
   */
  @Prop() circle?: boolean = false

  /**
   * Use mouse as the light source (ray-tracing)
   */
  @Prop() rayTracing?: boolean = false

  /**
   * Emitted when the button has focus.
   */
  @Event() focusEvent!: EventEmitter<void>

  /**
   * Emitted when the button loses focus.
   */
  @Event() blurEvent!: EventEmitter<void>

  /**
   * Emitted when the button is clicked.
   */
  @Event() clickEvent!: EventEmitter<void>

  private onFocus = () => {
    this.focusEvent.emit()
  }

  private onBlur = () => {
    this.blurEvent.emit()
  }

  private onClick = () => {
    this.clickEvent.emit()
  }

  render() {
    const {
      type,
      disabled,
      rel,
      target,
      href,
      icon,
      block,
      bordered,
      iconText,
      flat,
      circle,
    } = this
    const TagType = href === undefined ? 'button' : 'a'
    const attrs =
      TagType === 'button'
        ? { type }
        : {
            download: this.download,
            href,
            rel,
            target,
          }
    return (
      <Host
        aria-disabled={disabled ? 'true' : null}
        role="button"
        class={{
          icon,
          block,
          bordered,
          'icon-text': iconText,
          flat,
          circle,
        }}
      >
        {this.rayTracing && <sc-ray-tracer element={this.el}></sc-ray-tracer>}
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
    )
  }
}
