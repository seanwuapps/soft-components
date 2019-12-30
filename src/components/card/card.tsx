import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "sc-card",
  styleUrl: "card.scss",
  shadow: true
})
export class Card {
  @Prop() engraved?: boolean | undefined = false;

  render() {
    const { engraved } = this;
    return (
      <Host class={{ engraved }}>
        <h2>
          <slot name="title"></slot>
        </h2>
        <slot></slot>
      </Host>
    );
  }
}
