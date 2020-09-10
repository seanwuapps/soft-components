import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'doc-usage',
})
export class Usage {
  @Prop() usage: string;
  render() {
    return (
      <div>
        <code-block code={this.usage}></code-block>
      </div>
    );
  }
}
