import { Component, Host, h, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import { renderMarkdown } from '../../../helpers/md.js';
import 'highlight.js/styles/dracula.css';
import { NavItem } from '../../../helpers/defs';
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

  components: NavItem[] = [
    {
      text: 'Button',
      url: 'sc-button',
    },
    {
      text: 'Tabs',
      url: 'sc-tabs',
      children: [
        {
          text: 'Tab button',
          url: 'sc-tab-button',
        },
        {
          text: 'Tab content',
          url: 'sc-tab-content',
        },
      ],
    },
  ];

  componentTree: null;

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

  buildComponentNavDOM(component) {
    return (
      <div class="nav-item">
        <sc-button block href={`/components/${component.url}`}>
          {component.text}
        </sc-button>
        {component.children && <div class="submenu">{component.children.map(child => this.buildComponentNavDOM(child))}</div>}
      </div>
    );
  }
  render() {
    return (
      <Host>
        <div class="container">
          <div class="flex">
            <aside class="w-3 py-2 pr-2">
              <nav>
                <div>{this.components.map(component => this.buildComponentNavDOM(component))}</div>
              </nav>
            </aside>
            <main class="w-7 pa-4">
              <div innerHTML={this.content}></div>
            </main>
          </div>
        </div>
      </Host>
    );
  }
}
