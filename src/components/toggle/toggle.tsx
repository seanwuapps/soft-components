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
        <label class="toggle">
          <input type="checkbox" />
          <span class="toggle--slider">
            <span class="toggle--btn">
              <span class="toggle--dots">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </span>
            </span>
          </span>
        </label>
      </Host>
    );
  }
}
