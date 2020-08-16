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
          text: 'Install',
          url: '/install',
        },
        {
          text: 'Framework integration',
          url: '/framework-integration',
        },
      ],
    },
    {
      text: 'Components',
      url: '/components/get-started',
      children: buildComponentNavArray(),
    },
    {
      text: 'Why soft components?',
      url: '/why-soft-components',
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
