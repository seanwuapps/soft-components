import { Component, h, Prop } from '@stencil/core';
import md from '../../../helpers/md';

@Component({
  tag: 'doc-usage',
})
export class Usage {
  @Prop() usage: string;
  render() {
    return <div innerHTML={md.render(this.usage)}></div>;
  }
}
