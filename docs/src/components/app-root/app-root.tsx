import { Component, Host, h } from '@stencil/core';
import 'soft-components';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  render() {
    return (
      <Host>
        <div class="left-side">
          <app-nav></app-nav>
        </div>

        <app-header class="header"></app-header>

        <main class="main engraved-2">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/components/:name" component="page-components" />
              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <div class="footer engraved-2 pa-4 round">seanwuapps | github | twitter</div>
      </Host>
    );
  }
}
