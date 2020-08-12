import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-notfound',
  styleUrl: 'page-notfound.css',
  shadow: true,
})
export class PageNotfound {
  render() {
    return (
      <Host>
        <h1>Page not found</h1>
      </Host>
    );
  }
}
