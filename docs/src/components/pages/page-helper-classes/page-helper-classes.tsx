import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-helper-classes',
  styleUrl: 'page-helper-classes.scss',
  shadow: true,
})
export class PageHelperClasses {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
