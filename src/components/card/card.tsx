import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "sc-card",
  styleUrl: "card.scss",
  shadow: true
})
export class Card {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
