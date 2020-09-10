import { Component, Prop, h, Element, State, Build } from '@stencil/core';
import hljs from 'highlight.js';
import SimpleBar from 'simplebar';

@Component({
  tag: 'code-block',
  styleUrls: ['code-block.scss'],
})
export class CodeBlock {
  @Element() el: HTMLElement;
  @Prop() code: string;

  @State() sourceCodeOpen: boolean = false;

  componentDidRender() {
    if (Build.isBrowser) {
      this.el.querySelectorAll('.hljs').forEach(el => {
        new SimpleBar(el as HTMLElement, { autoHide: false });
      });
    }
  }

  toggleSourceCode() {
    this.sourceCodeOpen = !this.sourceCodeOpen;
  }

  render() {
    return (
      <div class="raised-2 round pa-2">
        <div class="control-bar text-right">
          <sc-button icon class={` ${this.sourceCodeOpen && 'active'}`} onClick={() => this.toggleSourceCode()}>
            <box-icon name="code" color="currentColor"></box-icon>
          </sc-button>
          <sc-button icon class="ml-2">
            <box-icon name="github" type="logo" color="currentColor"></box-icon>
          </sc-button>
          <codepen-link html={this.code}>
            <sc-button icon class="ml-2">
              <box-icon type="logo" name="codepen" color="currentColor"></box-icon>
            </sc-button>
          </codepen-link>
        </div>

        <div class="preview" innerHTML={this.code}></div>
        <div class={`code-block ${this.sourceCodeOpen && 'open'}`}>
          <pre class="hljs">
            <code innerHTML={hljs.highlight('html', this.code, true).value}></code>
          </pre>
        </div>
      </div>
    );
  }
}
