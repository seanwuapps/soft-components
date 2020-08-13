import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
})
export class AppHeader {
  render() {
    return (
      <Host>
        <div class="raised-4 mb-4 py-2">
          <div class="container">
            <div class="flex align-center justify-between">
              <app-logo></app-logo>
              <app-nav></app-nav>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
