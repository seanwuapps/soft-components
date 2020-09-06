import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sc-tooltip',
  styleUrl: 'sc-tooltip.css',
  shadow: true,
})
export class ScTooltip {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
