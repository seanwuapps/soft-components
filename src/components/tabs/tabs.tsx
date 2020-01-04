import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sc-tabs',
  styleUrl: 'tabs.css',
  shadow: true
})
export class Tabs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
