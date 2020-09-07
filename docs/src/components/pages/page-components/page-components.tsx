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
    const { name } = this.match.params;
    if (!name) {
      return (
        <div>
          <h1>Components</h1>
          <p>Use the site navigation to find a component you desire.</p>
        </div>
      );
    }
    const key = getKey(this.component);
    const componentName = getName(this.component);

    console.log(this.component);
    return (
      <Host>
        <div class="flex align-stretch">
          {/* Main */}
          <section class="w-8">
            <div class="component-title">
              <h1>{componentName}</h1>
              <code>&lt;{this.component.tag}&gt;</code>
            </div>
            {/* usage */}

            {this.component.usage[key] && (
              <div>
                <linkable-title anchor="usage">Usage</linkable-title>
                <code-block code={this.component.usage[key]}></code-block>
              </div>
            )}

            {/* Props */}
            {this.component.props && (
              <div>
                <linkable-title anchor="usage">Props</linkable-title>
                {this.component.props.map(prop => (
                  <div class="prop">
                    <linkable-title anchor={`props-${prop.name}`} tag="h6" class="prop__title">
                      {prop.name}
                    </linkable-title>
                    <div class="prop__default">
                      <strong>Default</strong>: <em>{prop.default || `null`}</em>
                    </div>
                    <p>{prop.docs}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      </Host>
    );
  }
}
