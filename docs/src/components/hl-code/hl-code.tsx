import { Component, Host, h, Prop, State } from '@stencil/core';
import hljs from 'highlight.js';
import copy from 'copy-to-clipboard';

@Component({
  tag: 'hl-code',
  styleUrl: 'hl-code.scss',
})
export class HlCode {
  @Prop() language?: string;
  @Prop() code?: string;

  @State() copySuccessful: boolean = false;
  copyCode() {
    copy(this.code);
    this.copySuccessful = true;
    setTimeout(() => {
      this.copySuccessful = false;
    }, 4000);
  }

  render() {
    return (
      <Host>
        <box-icon class="copy-icon" name={this.copySuccessful ? 'check' : 'copy'} color="currentColor" onClick={() => this.copyCode()}></box-icon>
        <pre class="hljs">
          <code innerHTML={hljs.highlight(this.language, this.code, true).value}></code>
        </pre>
      </Host>
    );
  }
}
