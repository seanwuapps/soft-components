import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "sc-toggle",
  styleUrl: "toggle.scss"
  // shadow: true
})
export class Toggle {
  render() {
    return (
      <Host>
        <input type="checkbox" />
      </Host>
    );
  }
}
