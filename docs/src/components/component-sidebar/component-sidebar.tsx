import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-sidebar',
  styleUrl: 'component-sidebar.scss',
})
export class ComponentSidebar {
  render() {
    return (
      <Host>
        <h2>Sidebar</h2>
      </Host>
    );
  }
}
