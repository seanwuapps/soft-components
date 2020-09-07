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
    });
  }

  render() {
    return (
      <div class="raised-2 round pa-2">
        <div class="control-bar text-right">
          <sc-button icon class="ml-2 active">
            <box-icon name="code" color="var(--sc-button-text-color)"></box-icon>
          </sc-button>
          <sc-button icon class="ml-2">
            <box-icon name="github" type="logo" color="var(--sc-button-text-color)"></box-icon>
          </sc-button>
        </div>

        <div class="preview" innerHTML={this.code}></div>

        <pre class="hljs">
          <code innerHTML={hljs.highlight('html', this.code, true).value}></code>
        </pre>
      </div>
    );
  }
}
