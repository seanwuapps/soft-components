import { Component, Host, h, Element, Prop } from "@stencil/core";
import { isSlotEmpty } from "../../utils/component";

@Component({
  tag: "sc-tabs",
  styleUrl: "tabs.scss"
  // shadow: true
})
export class Tabs {
  @Element() el: HTMLElement;

  tabButtons: HTMLScTabButtonElement[] = [];

  @Prop() transition: string | undefined = "";

  async connectedCallback() {
    if (!isSlotEmpty(this.el)) {
      this.tabButtons = Array.from(this.el.querySelectorAll("sc-tab-button"));
    }
  }

  handleActive(e) {
    this.tabButtons.map(el => {
      el.setInactive();
    });
    e.target.setActive(false);
  }

  render() {
    const { transition } = this;
    return (
      <Host
        class={`tabs${
          transition.length > 0 ? " transition-" + transition : ""
        }`}
        onActiveEvent={e => this.handleActive(e)}
      >
        <slot></slot>
      </Host>
    );
  }
}
