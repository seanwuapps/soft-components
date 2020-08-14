import { Component, Host, h } from '@stencil/core';
import 'soft-components';
import 'boxicons';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  render() {
    return (
      <Host>
        <app-header></app-header>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/components/:name" component="page-components" />
              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}
