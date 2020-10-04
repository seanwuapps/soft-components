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
} from '@stencil/core'
import { hasSlot } from '../../../utils/component'

@Component({
  tag: 'sc-accordion-item',
  styleUrl: 'sc-accordion-item.scss',
  shadow: true,
})
export class ScAccordionItem {
  @Element() el: HTMLScAccordionItemElement

  /**
   * Heading text.
   * This will be overwritten by `heading` slot
   */
  @Prop() heading?: string = null

  /**
   * The HTML tag to be applied to the heading text.
   * This will be overwritten by `heading` slot
   */
  @Prop() headingTag?: string = 'h3'

  /**
   * If expanded height should be automatically calculated. If set, the `--sc-accordion-item-body-max-height` CSS variable will be set automatically to the content height
   */
  @Prop() autoHeight?: boolean = true

  /**
   * If the accordion item should be opened by default
   */
  @Prop({ reflect: true, mutable: true }) active?: boolean = false

  @State() hasHeadingSlot: boolean = true
  @State() hasArrowSlot: boolean = true

  bodyEl: HTMLElement

  animationHeightInterval: number // number of px per frame of animation change.

  @Event() opened: EventEmitter
  @Event() opening: EventEmitter

  @Event() closed: EventEmitter
  @Event() closing: EventEmitter

  componentWillLoad() {
    this.hasHeadingSlot = hasSlot(this.el, 'heading')
    this.hasArrowSlot = hasSlot(this.el, 'arrow')
  }
  componentDidLoad() {
    if (this.autoHeight) {
      this.bodyEl.style.setProperty(
        '--sc-accordion-item-body-max-height',
        this.bodyEl.scrollHeight + 'px'
      )
    }

    this.onTransitionEnd()

    this.bodyEl.addEventListener('transitionstart', () => {
      this.onTransitionStart()
    })

    this.bodyEl.addEventListener('transitionend', () => {
      this.onTransitionEnd()
    })
  }

  onTransitionEnd() {
    if (this.active) {
      this.bodyEl.style.overflow = 'auto'
      this.opened.emit()
    } else {
      this.bodyEl.style.overflow = 'hidden'
      this.bodyEl.style.visibility = 'hidden'
      this.closed.emit()
    }
  }
  onTransitionStart() {
    if (this.active) {
      this.bodyEl.style.visibility = 'visible'
      this.opening.emit()
    } else {
      this.closing.emit()
    }
  }

  @Method()
  async toggle() {
    if (this.active) {
      this.close()
    } else {
      this.open()
    }
  }

  @Method()
  async close() {
    this.active = false
  }

  @Method()
  async open() {
    this.active = true
  }

  render() {
    const { active, autoHeight, headingTag: HeadingTag } = this
    return (
      <Host class={{ active, autoHeight }}>
        <button class="heading" role="button" onClick={() => this.toggle()}>
          {this.hasHeadingSlot ? (
            <slot name="heading"></slot>
          ) : (
            <HeadingTag class="heading-text">{this.heading}</HeadingTag>
          )}
          <span class="arrow">
            {this.hasArrowSlot ? (
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
          ref={el => (this.bodyEl = el as HTMLElement)}
        >
          <div class="body">
            <slot></slot>
          </div>
        </div>
      </Host>
    )
  }
}
