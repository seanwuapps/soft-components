import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'sc-color',
  styleUrl: 'sc-color.scss',
})
export class ScColor {

  /**
   * Label for input
   */
  @Prop() label?:string = '';

  render() {
    return (
      <Host>

      </Host>
    );
  }

}
