import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "sc-tab-content",
  styleUrl: "tab-content.scss",
  shadow: true
})
export class TabContent {
  // mostly for css transition purpose
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
