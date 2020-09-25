import { Component, Host, h, Element, Prop, Watch } from '@stencil/core';

@Component({
  tag: 'utterances-div',
  styleUrl: 'utterances-div.scss',
})
export class UtterancesDiv {
  @Element() el: HTMLElement;

  @Prop() repo: string;
  @Prop() issueTerm?: string = '';
  @Prop() label?: string;
  @Prop() theme?: string;
  @Prop() crossorigin?: string = 'anonymous';
  @Prop() async?: boolean = true;

  componentDidLoad() {
    this.loadUtterances();
  }
  @Watch('theme')
  loadUtterances() {
    const utterances = document.createElement('script');
    const { repo, issueTerm, label, theme, crossorigin, async } = this;
    Object.entries({
      'src': 'https://utteranc.es/client.js',
      repo,
      'issue-term': issueTerm,
      label,
      theme,
      crossorigin,
      async,
    }).forEach(([key, value]) => {
      utterances.setAttribute(key, String(value));
    });
    if (this.el.lastChild) {
      this.el.removeChild(this.el.lastChild);
    }
    this.el.appendChild(utterances);
  }
  render() {
    return (
      <Host>
        <span>Loading</span>
      </Host>
    );
  }
}
