import { Component, Host, h } from '@stencil/core';
import 'soft-components';
import 'linkable-title';
import 'seanwu-logo';
import state from '../../store';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
  }

  render() {
    return (
      <Host class={`${state.mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <stencil-router>
          <app-header></app-header>
          <title-bar heading={state.page.heading}></title-bar>
          <main class="main pa-2">
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="page-home" exact={true} />
              <stencil-route url="/:page" component="page-standard" exact={true} />
              <stencil-route url="/components" exact={true} component="page-standard" />
              <stencil-route url="/components/:tag" component="page-components" />
              <stencil-route component="page-notfound" />
            </stencil-route-switch>
          </main>
          <footer class="footer pa-4">
            <app-footer></app-footer>
          </footer>
          <theme-setter></theme-setter>
        </stencil-router>
      </Host>
    );
  }
}
