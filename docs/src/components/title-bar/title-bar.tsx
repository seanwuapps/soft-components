import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'title-bar',
  styleUrl: 'title-bar.scss',
})
export class TitleBar {
  @Prop() heading: string = 'Soft components';
  render() {
    return (
      <Host>
        <h1>{this.heading}</h1>
      </Host>
    );
  }
}
