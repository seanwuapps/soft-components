import { Component, Host, h, State } from '@stencil/core';
import 'soft-components';
import 'linkable-title';
@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
})
export class AppRoot {
  @State() mobileMenuOpen: boolean = false;
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  render() {
    return (
      <Host>
        <div class="header">
          <box-icon name="menu" size="lg" color="currentColor" class="mobile-nav-trigger" onClick={() => this.toggleMobileMenu()}></box-icon>
          <div class="logo-container">
            <stencil-route-link url="/" exact={true}>
              <app-logo></app-logo>
            </stencil-route-link>
          </div>
          <div class="spacer">&nbsp;</div>
        </div>
        <div class={`mobile-nav ${this.mobileMenuOpen ? 'open' : ''}`}>
          <div class="mobile-nav-header">
            <box-icon name="x" size="lg" color="currentColor" class="mobile-nav-trigger" onClick={() => this.toggleMobileMenu()}></box-icon>
            <div class="logo-container">
              <stencil-route-link url="/" exact={true}>
                <app-logo></app-logo>
              </stencil-route-link>
            </div>
            <div class="spacer">&nbsp;</div>
          </div>
          <app-nav onClick={() => (this.mobileMenuOpen = false)}></app-nav>
        </div>

        <div class="nav">
          <app-nav></app-nav>
        </div>

        <main class="main py-4">
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
