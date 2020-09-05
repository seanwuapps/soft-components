import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent } from '../../../../docs-data';
import { getName, getKey } from '../../../helpers/components';

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
    const key = getKey(this.component);
    const name = getName(this.component);
    console.log({ name });
    return (
      <Host>
        <div class="flex align-stretch">
          {/* Main */}
          <main class="w-8">
            <div class="component-title">
              <h1>{name}</h1>
              <code>&lt;{this.component.tag}&gt;</code>
            </div>

            {/* usage */}
            {this.component.usage[key] && <doc-usage usage={this.component.usage[key]}></doc-usage>}
          </main>
        </div>
      </Host>
    );
  }
}
