import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {
  render() {
    return (
      <Host>
        <h1>Home page</h1>
        <div class="row">
          <div class="col-xs">auto</div>
          <div class="col-xs">auto</div>
          <div class="col-xs">auto</div>
        </div>
        <sc-button>TEST</sc-button>
        <slot></slot>
      </Host>
    );
  }
}
