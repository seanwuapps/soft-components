import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-standard',
  styleUrl: 'page-standard.scss',
  shadow: true,
})
export class PageStandard {
  render() {
    return (
      <Host>
        <h1>Standard</h1>
        <slot></slot>
      </Host>
    );
  }
}
