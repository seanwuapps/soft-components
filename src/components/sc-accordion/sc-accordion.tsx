import { Component, Host, h, Prop, Element, Listen } from "@stencil/core";
@Component({
  tag: "sc-accordion",
  styleUrl: "sc-accordion.scss",
  shadow: true,
})
export class ScAccordion {
  @Element() el: HTMLElement;
  /**
   * If multiple `<sc-accordion-item>`s can open at the same time
   */
  @Prop() multiple?: boolean = false;

  activeItem: HTMLScAccordionItemElement;

  componentWillLoad() {
    if (!this.multiple) {
      this.activeItem = this.el.querySelector(
        ":scope > sc-accordion-item[active]"
      ) as HTMLScAccordionItemElement;
      if (this.activeItem) {
        this.activeItem.open();
      }
      this.closeNonActive();
    }
  }

  @Listen("opened", {
    capture: true,
    passive: false,
  })
  openHandler(e) {
    if (!this.multiple) {
      this.activeItem = e.target as HTMLScAccordionItemElement;
      this.closeNonActive();
    }
  }

  closeNonActive() {
    const items = this.el.querySelectorAll("sc-accordion-item");
    items.forEach((item) => {
      if (!item.isEqualNode(this.activeItem)) {
        item.close();
      }
    });
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
