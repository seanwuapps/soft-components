import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'utterances-div',
  styleUrl: 'utterances-div.css',
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

    this.el.appendChild(utterances);
  }
  render() {
    return <Host></Host>;
  }
}
