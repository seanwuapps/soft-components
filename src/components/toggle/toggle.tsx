import { Component, Host, h, Prop } from "@stencil/core";

@Component({
  tag: "sc-toggle",
  styleUrl: "toggle.scss"
  // shadow: true
})
export class Toggle {
  /**
   * Label text to be displayed inline with the toggle
   */
  @Prop() label!: string | undefined;

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
        {this.label && <span class="toggle--label">{this.label}</span>}
      </Host>
    );
  }
}
