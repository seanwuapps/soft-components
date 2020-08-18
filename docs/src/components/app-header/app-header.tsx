import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
})
export class AppHeader {
  render() {
    return (
      <Host>
        <div class="py-2">
          <div class="container"></div>
        </div>
      </Host>
    );
  }
}