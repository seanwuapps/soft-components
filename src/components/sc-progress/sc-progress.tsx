import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'sc-progress',
  styleUrl: 'sc-progress.scss',
  shadow: true,
})
export class ScProgress {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
