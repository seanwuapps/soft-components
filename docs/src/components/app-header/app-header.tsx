import { Component, Host, h } from '@stencil/core';
import state from '../../store';
@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
})
export class AppHeader {
  toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
  }
  render() {
    return (
      <Host>
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
        <div class={`mobile-nav ${state.mobileMenuOpen ? 'open' : ''}`}>
          <div class="mobile-nav-header">
            <sc-button flat icon bordered class="mobile-nav-trigger" onClick={() => this.toggleMobileMenu()}>
              <box-icon name="x" size="lg" color="currentColor"></box-icon>
            </sc-button>
            <div class="logo-container">
              <stencil-route-link url="/" exact={true} onClick={() => (state.mobileMenuOpen = false)}>
                <app-logo></app-logo>
              </stencil-route-link>
            </div>
            <div class="spacer">&nbsp;</div>
          </div>
          <app-nav onClick={() => (state.mobileMenuOpen = false)}></app-nav>
        </div>
        <div class="nav">
          <app-nav></app-nav>
        </div>
      </Host>
    );
  }
}
