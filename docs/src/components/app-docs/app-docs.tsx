import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-docs',
  styleUrl: 'app-docs.css',
  shadow: true,
})
export class AppDocs {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
