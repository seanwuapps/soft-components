import { Component, Host, h, Prop, State, Element } from "@stencil/core";
import { isSlotEmpty } from "../../utils/component";

@Component({
  tag: "sc-card",
  styleUrl: "card.scss",
  shadow: true
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
   * If this card is hoverable
   */
  @Prop({ reflectToAttr: true }) hoverable?: boolean | undefined = false;

  /**
   * If this card has flat (border) style
   */
  @Prop({ reflectToAttr: true }) flat?: boolean | undefined = false;

  @State()
  hasCustomTitle: boolean;

  @State()
  hasOverflowMenu: boolean;

  componentDidLoad() {
    // this.hasFooter = isSlotEmpty(this.el, 'footer')
    this.hasCustomTitle = isSlotEmpty(this.el, "custom-title");
    this.hasOverflowMenu = isSlotEmpty(this.el, "overflow-menu");

    if (this.flat) {
      this.el.classList.add("flat");
    }

    // const footer = this.el.querySelector('.card-footer')
    // footer.addEventListener('click', e => {
    //   console.log(e.target)
    //   e.stopPropagation()
    // })
  }

  render() {
    const { engraved, hoverable, flat } = this;
    return (
      <Host class={{ engraved, hoverable, flat }}>
        <div class="overflow-menu">
          <slot name="overflow-menu" />
        </div>
        <h2>
          {this.hasCustomTitle ? (
            <slot name="custom-title" />
          ) : (
            <div>
              {this.cardTitle && <div class="card-title">{this.cardTitle}</div>}
              {this.cardSubtitle && (
                <div class="card-subtitle">{this.cardSubtitle}</div>
              )}
            </div>
          )}
        </h2>
        <div class="card-content">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
