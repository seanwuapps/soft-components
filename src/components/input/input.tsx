import { Component, Host, h } from "@stencil/core";

@Component({
  tag: "sc-input",
  styleUrl: "input.scss",
  shadow: true
})
export class Input {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
