import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { renderMarkdown } from '../../../helpers/md.js';
import 'highlight.js/styles/dracula.css';
@Component({
  tag: 'page-components',
  styleUrl: 'page-components.scss',
})
export class PageComponents {
  /**
   * url params matcher
   */
  @Prop() match: MatchResults;

  @State() content: string;

  @Watch('match')
  async loadContent() {
    const { name } = this.match.params;
    if (name.startsWith('sc-')) {
      const componentName = name.replace('sc-', '');

      const filePath = `/docs/components/${componentName}/readme.md`;

      try {
        //file exists
        const md = await fetch(filePath).then(res => res.text());
        this.content = renderMarkdown(md, true);
      } catch (err) {
        console.log({ err });
      }
    }
  }

  async componentWillLoad() {
    this.loadContent();
  }

  render() {
    return (
      <Host>
        <div innerHTML={this.content}></div>
      </Host>
    );
  }
}
