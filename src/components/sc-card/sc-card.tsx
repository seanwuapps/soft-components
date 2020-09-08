import { Component, Host, h, Prop, State, Element } from "@stencil/core";
import { isSlotEmpty } from "../../utils/component";

@Component({
  tag: "sc-card",
  styleUrl: "sc-card.scss",
  shadow: true,
})
export class Card {
  @Element() el: HTMLElement;
  /**
   * if true, card will appear engraved instead of raised by default.
   */
  @Prop() engraved?: boolean | undefined = false;

  /**
   * Title of the card
   */
  @Prop()
  cardTitle?: string;

  /**
   * Subtitle of the card
   */
  @Prop()
  cardSubtitle?: string;

  /**
   * If this card has bordered style
   */
  @Prop({ reflectToAttr: true }) bordered?: boolean | undefined = false;

  @State()
  hasCustomTitle: boolean;

  @State()
  hasOverflowMenu: boolean;

  componentWillLoad() {
    // this.hasFooter = isSlotEmpty(this.el, 'footer')
    this.hasCustomTitle = isSlotEmpty(this.el, "custom-title");
    this.hasOverflowMenu = isSlotEmpty(this.el, "overflow-menu");
  }

  render() {
    const { engraved, bordered } = this;
    return (
      <Host class={{ engraved, bordered }}>
        <div class="card-inner">
          <div class="overflow-menu">
            <slot name="overflow-menu" />
          </div>
          {this.hasCustomTitle || this.cardTitle || this.cardSubtitle ? (
            <div class="card-title-container">
              {this.hasCustomTitle ? (
                <slot name="custom-title" />
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
    );
  }
}
