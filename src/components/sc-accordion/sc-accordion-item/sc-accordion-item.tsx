import {
  Component,
  Host,
  h,
  Prop,
  State,
  Element,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";
import { isSlotEmpty } from "../../../utils/component";

@Component({
  tag: "sc-accordion-item",
  styleUrl: "sc-accordion-item.scss",
  shadow: true,
})
export class ScAccordionItem {
  @Element() el: HTMLScAccordionItemElement;

  /**
   * Heading text.
   * This will be overwritten by `heading` slot
   */
  @Prop() heading?: string = null;

  /**
   * The HTML tag to be applied to the heading text.
   * This will be overwritten by `heading` slot
   */
  @Prop() headingTag?: string = "h3";

  /**
   * If expanded height should be automatically calculated. If set, the `--sc-accordion-item-body-max-height` CSS variable will be set automatically to the content height
   */
  @Prop() autoHeight?: boolean = true;

  /**
   * If the accordion item should be opened by default
   */
  @Prop({ reflect: true, mutable: true }) active?: boolean = false;

  @State() headingSlotEmpty: boolean = true;
  @State() arrowSlotEmpty: boolean = true;

  bodyEl: HTMLElement;

  animationHeightInterval: number; // number of px per frame of animation change.

  @Event() opened: EventEmitter;
  @Event() opening: EventEmitter;

  @Event() closed: EventEmitter;
  @Event() closing: EventEmitter;

  componentWillLoad() {
    this.headingSlotEmpty = isSlotEmpty(this.el, "heading");
    this.arrowSlotEmpty = isSlotEmpty(this.el, "arrow");
  }
  componentDidLoad() {
    if (this.autoHeight) {
      this.bodyEl.style.setProperty(
        "--sc-accordion-item-body-max-height",
        this.bodyEl.scrollHeight + "px"
      );
    }

    this.bodyEl.addEventListener("transitionstart", () => {
      if (this.autoHeight) {
        this.bodyEl.style.overflow = "hidden";
      }
      this.onTransitionStart();
    });

    this.bodyEl.addEventListener("transitionend", () => {
      if (this.autoHeight) {
        this.bodyEl.style.overflow = "auto";
      }
      this.onTransitionEnd();
    });
  }

  onTransitionEnd() {
    if (this.active) {
      this.opened.emit();
    } else {
      this.bodyEl.style.visibility = "hidden";
      this.closed.emit();
    }
  }
  onTransitionStart() {
    if (this.active) {
      this.bodyEl.style.visibility = "visible";
      this.opening.emit();
    } else {
      this.closing.emit();
    }
  }

  @Method()
  async toggle() {
    if (this.active) {
      this.close();
    } else {
      this.open();
    }
  }

  @Method()
  async close() {
    this.active = false;
    // this.closed.emit();
  }

  @Method()
  async open() {
    this.active = true;
    // this.opened.emit();
  }

  render() {
    const { active, autoHeight, headingTag: HeadingTag } = this;
    return (
      <Host class={{ active, autoHeight }}>
        <button
          class="heading"
          tabindex="0"
          role="button"
          onClick={() => this.toggle()}
        >
          {this.headingSlotEmpty ? (
            <slot name="heading"></slot>
          ) : (
            <HeadingTag class="heading-text">{this.heading}</HeadingTag>
          )}
          <span class="arrow">
            {this.arrowSlotEmpty ? (
              <slot name="arrow"></slot>
            ) : (
              <svg focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
              </svg>
            )}
          </span>
        </button>
        <div
          class="body-container"
          ref={(el) => (this.bodyEl = el as HTMLElement)}
        >
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
