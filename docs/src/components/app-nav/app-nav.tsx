import { Component, Host, h } from '@stencil/core';
import { NavItem } from '../../helpers/defs';
@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.scss',
})
export class AppNav {
  private links: NavItem[] = [
    {
      text: 'Components',
      url: '/components/get-started',
    },
  ];
  render() {
    return (
      <Host>
        <ul>
          {this.links.map(item => (
            <li>
              <stencil-route-link url={item.url}>{item.text}</stencil-route-link>
            </li>
          ))}
        </ul>
      </Host>
    );
  }
}
