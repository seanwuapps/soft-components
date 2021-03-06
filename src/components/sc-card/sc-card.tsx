import { Component, Host, h, Prop, Element } from '@stencil/core'
import { hasSlot } from '../../utils/component'
import { convertToGlassStyles, FrostedLevel } from '../../utils/glassStyle'
@Component({
  tag: 'sc-card',
  styleUrl: 'sc-card.scss',
  shadow: true,
})
export class Card {
  @Element() el: HTMLElement
  /**
   * if true, card will appear engraved instead of raised by default.
   */
  @Prop() engraved?: boolean | undefined = false

  /**
   * Title of the card
   */
  @Prop()
  cardTitle?: string

  /**
   * Subtitle of the card
   */
  @Prop()
  cardSubtitle?: string

  /**
   * If this card has bordered style
   */
  @Prop({ reflect: true }) bordered?: boolean | undefined = false

  /**
   * Position of featured media in the card
   */
  @Prop({ reflect: true }) mediaPosition?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'start' // responsive top left
    | 'end' // responsive bottom right
    | undefined = null

  /**
   * Use mouse as the light source (ray-tracing)
   */
  @Prop() rayTracing?: boolean = false

  hasCustomTitle: boolean

  hasOverflowMenu: boolean

  hasMedia: boolean

  componentWillLoad() {
    this.hasCustomTitle = hasSlot(this.el, 'custom-title')
    this.hasOverflowMenu = hasSlot(this.el, 'overflow-menu')
    this.hasMedia = hasSlot(this.el, 'media-content')
  }
  /**
   * Turn on glass mode
   */
  @Prop() glass?: boolean = false
  /**
   *
   */
  @Prop() frostedLevel?: FrostedLevel = 1

  componentDidLoad() {
    if (this.glass) {
      convertToGlassStyles(this.el, this.frostedLevel)
    }
  }

  render() {
    const { engraved, bordered } = this
    return (
      <Host class={{ engraved, bordered }}>
        {this.rayTracing && <sc-ray-tracer element={this.el}></sc-ray-tracer>}
        {this.hasMedia && (
          <div class="card-media">
            <slot name="media-content"></slot>
          </div>
        )}
        <div class="card-inner">
          <div class="overflow-menu">
            <slot name="overflow-menu"></slot>
          </div>
          {this.hasCustomTitle || this.cardTitle || this.cardSubtitle ? (
            <div class="card-title-container">
              {this.hasCustomTitle ? (
                <slot name="custom-title"></slot>
              ) : (
                <div>
                  {this.cardTitle && (
                    <div class="card-title">{this.cardTitle}</div>
                  )}
                  {this.cardSubtitle && (
                    <div class="card-subtitle">{this.cardSubtitle}</div>
                  )}
                </div>
              )}
            </div>
          ) : null}

          <div class="card-content">
            <slot></slot>
          </div>
        </div>
      </Host>
    )
  }
}
