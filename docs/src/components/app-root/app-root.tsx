import { Component, Host, h } from '@stencil/core';
import 'soft-components';

@Component({
  tag: 'app-root',
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
              <stencil-route url="/profile/:name" component="app-profile" />
              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </Host>
    );
  }
}
