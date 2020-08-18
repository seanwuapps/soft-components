import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent } from '../../../../docs-data';
import { Title } from '../../docs-parts';

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

  @State() component: JsonDocsComponent;

  @Watch('match')
  async loadComponent() {
    const { name } = this.match.params;
    if (name.startsWith('sc-')) {
      this.component = this.getComponentData(name);
    }
  }

  getComponentData(tag) {
    return docsData.components.find(component => component.tag === tag);
  }

  async componentWillLoad() {
    this.loadComponent();
  }

  render() {
    return (
      <Host>
        <Title component={this.component}></Title>
      </Host>
    );
  }
}
