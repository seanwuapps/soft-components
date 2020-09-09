import { Component, Host, h } from '@stencil/core';
import { NavItem } from '../../helpers/defs';
import { buildComponentNavArray } from '../../helpers/components';
@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
})
export class AppNav {
  private links: NavItem[] = [
    {
      text: 'Getting started',
      url: '/getting-started',
      children: [
        {
          text: 'The theory',
          url: '/theory',
        },
        {
          text: 'Why soft components?',
          url: '/why-soft-components',
        },
        {
          text: 'Install',
          url: '/install',
        },
        {
          text: 'Framework integration',
          url: '/framework-integration',
        },
        {
          text: 'Theme store',
          url: '/theme-store',
        },
      ],
    },
    {
      text: 'Components',
      url: '/components',
      children: buildComponentNavArray(),
    },
    {
      text: 'Helper classes',
      url: '/helper-classes',
    },
  ];

  buildNavItemDOM(navItem: NavItem) {
    return (
      <li class="nav-item">
        <stencil-route-link url={navItem.url} activeClass="active engraved-2">
          {navItem.text}
        </stencil-route-link>
        {navItem.children && <ul class="sub-nav">{navItem.children.map(child => this.buildNavItemDOM(child))}</ul>}
      </li>
    );
  }
  render() {
    return (
      <Host>
        <ul class="nav">{this.links.map(item => this.buildNavItemDOM(item))}</ul>
      </Host>
    );
  }
}
