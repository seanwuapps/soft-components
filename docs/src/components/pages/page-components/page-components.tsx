import { Component, Host, h, Prop } from '@stencil/core';
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

  content: string;

  async componentWillLoad() {
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
  render() {
    return (
      <Host class="flex">
        <aside class="w-3 pa-4 text-right-md">
          <div>{this.match.params.name}</div>
        </aside>
        <main class="w-7 pa-4">
          <div innerHTML={this.content}></div>
        </main>
      </Host>
    );
  }
}
