import { Component, Host, h } from '@stencil/core';
import 'soft-components';
import 'linkable-title';
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

        <main class="main pl-2 py-4">
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/:page" component="page-standard" exact={true} />
              <stencil-route url="/components" exact={true} component="page-standard" />
              <stencil-route url="/components/:tag" component="page-components" />
              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </stencil-router>
        </main>
        <footer class="footer pa-4 round">seanwuapps | github | twitter</footer>
        <theme-setter></theme-setter>
      </Host>
    );
  }
}
