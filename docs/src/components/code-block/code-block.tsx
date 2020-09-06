import { Component, Prop, h } from '@stencil/core';
import hljs from 'highlight.js';

@Component({
  tag: 'code-block',
  styleUrls: ['code-block.scss'],
})
export class CodeBlock {
  @Prop() code: string;

  render() {
    return (
      <div>
        <div class="preview" innerHTML={this.code}></div>

        <pre class="hljs raised-4">
          <code innerHTML={hljs.highlight('html', this.code, true).value}></code>
        </pre>
      </div>
    );
  }
}
