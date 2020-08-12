import { Component, Host, h } from '@stencil/core';

interface NavItem {
  text: string;
  url: string;
}

@Component({
  tag: 'app-nav',
  styleUrl: 'app-nav.css',
})
export class AppNav {
  private links: [NavItem] = [
    {
      text: '',
      url: '/',
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
