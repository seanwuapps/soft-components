import { Component, Prop, h, Element } from '@stencil/core';
import hljs from 'highlight.js';
import SimpleBar from 'simplebar';

@Component({
  tag: 'code-block',
  styleUrls: ['code-block.scss'],
})
export class CodeBlock {
  @Element() el: HTMLElement;
  @Prop() code: string;

  componentDidRender() {
    this.el.querySelectorAll('.hljs').forEach(el => {
      new SimpleBar(el as HTMLElement, { autoHide: false });
      el.classList.add('raised-4');
    });
  }

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
