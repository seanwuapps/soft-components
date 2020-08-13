import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {
  render() {
    return (
      <Host>
        <div class="container">
          <div class="flex">
            <h1 class="w-5">Soft components</h1>
            <p class="w-5 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magnam dolorem, quidem ex ducimus consequatur molestiae sunt est eveniet placeat porro sint excepturi
              voluptatum aperiam maxime id alias, sit deleniti?
            </p>
          </div>
        </div>
      </Host>
    );
  }
}
