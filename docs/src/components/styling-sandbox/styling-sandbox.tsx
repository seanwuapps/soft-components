import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'styling-sandbox',
  styleUrl: 'styling-sandbox.scss',
  shadow: true,
})
export class StylingSandbox {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
