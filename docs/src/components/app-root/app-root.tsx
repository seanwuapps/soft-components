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
          <stencil-route-link url="/" exact={true}>
            <app-logo class="mb-3"></app-logo>
          </stencil-route-link>

          <app-nav></app-nav>
        </div>

        <app-header class="header"></app-header>

        <main class="main">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/:page" component="page-standard" exact={true} />
              <stencil-route url="/components/:name" component="page-components" />
              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <div class="footer pa-4 round">seanwuapps | github | twitter</div>
      </Host>
    );
  }
}
