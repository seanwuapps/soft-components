import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sc-toggle',
  styleUrl: 'toggle.css',
  shadow: true
})
export class Toggle {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
