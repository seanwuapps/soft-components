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
      <Host class={`${this.mobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div class="header">
          <sc-button flat icon bordered onClick={() => this.toggleMobileMenu()} class="mobile-nav-trigger">
            <box-icon name="menu" size="lg" color="currentColor"></box-icon>
          </sc-button>
          <div class="logo-container">
            <stencil-route-link url="/" exact={true}>
              <app-logo></app-logo>
            </stencil-route-link>
          </div>
          <div class="spacer">&nbsp;</div>
        </div>
        <div class={`mobile-nav ${this.mobileMenuOpen ? 'open' : ''}`}>
          <div class="mobile-nav-header">
            <sc-button flat icon bordered class="mobile-nav-trigger" onClick={() => this.toggleMobileMenu()}>
              <box-icon name="x" size="lg" color="currentColor"></box-icon>
            </sc-button>
            <div class="logo-container">
              <stencil-route-link url="/" exact={true} onClick={() => (this.mobileMenuOpen = false)}>
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

        <main class="main pa-2 py-4">
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
        <footer class="footer pa-4">
          <div class="flex text-center">
            <div class="w mt-2">
              <sc-button href="https://github.com/seanwuapps/soft-components" target="_blank" rel="noreferrer">
                <box-icon type="logo" size="sm" name="github" color="currentColor"></box-icon>
                <br />
                GitHub
              </sc-button>
            </div>
            <div class="w mt-2">
              <sc-button href="https://github.com/seanwuapps/soft-components" target="_blank" rel="noreferrer">
                <box-icon type="logo" size="sm" name="twitter" color="currentColor"></box-icon>
                <br />
                Twitter
              </sc-button>
            </div>
          </div>
        </footer>
        <theme-setter></theme-setter>
      </Host>
    );
  }
}
