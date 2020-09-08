import { Component, Host, h, Prop, Watch, State, Element } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent } from '../../../../docs-data';
import { getName, getKey } from '../../../helpers/components';
import md from '../../../helpers/md';
import SimpleBar from 'simplebar';
@Component({
  tag: 'page-components',
  styleUrl: 'page-components.scss',
})
export class PageComponents {
  @Element() el: HTMLElement;
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

  componentDidRender() {
    this.el.querySelectorAll('.table-body').forEach(el => {
      new SimpleBar(el as HTMLElement, { autoHide: false });
    });
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

    console.log(componentName, this.component);
    return (
      <Host>
        <article class="flex align-stretch">
          {/* Main */}
          <main class="w-8">
            {/* Title */}
            <section class="component-title">
              <h1>{componentName}</h1>
              <code>&lt;{this.component.tag}&gt;</code>
            </section>
            {/* Usage */}
            {this.component.usage[key] && (
              <section>
                <linkable-title anchor="usage">Usage</linkable-title>
                <code-block code={this.component.usage[key]}></code-block>
              </section>
            )}

            {/* Props */}
            {this.component.props && (
              <section>
                <linkable-title anchor="props">Props</linkable-title>

                <div class="props-container table">
                  <div class="table-head py-2 flex raised-2 sticky">
                    <div class="w-2 pl-2">Name</div>
                    <div class="w-4">Description</div>
                    <div class="w-2">Type</div>
                    <div class="w-2">Default</div>
                    <div class="w1">
                      <box-icon name="search"></box-icon>
                    </div>
                  </div>
                  <div class="table-body  engraved-1">
                    {this.component.props.map(prop => (
                      <div class="flex">
                        <div class="w-2 py-2 pl-2">
                          <linkable-title anchor={`props-${prop.name}`} tag="code" class="prop__title">
                            {prop.name}
                          </linkable-title>
                        </div>
                        <div class="w-4 py-2" innerHTML={md.render(prop.docs)}></div>
                        <div class="w-2 py-2">
                          <code>{prop.type}</code>
                        </div>
                        <div class="w-2 py-2">
                          <code>{prop.default}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Customisation */}
            <section>
              <h6>How can I customise this component?</h6>
              <div class="mt-1">{this.component.encapsulation === 'shadow' ? 'CSS variables only' : 'Overwrite with css'}</div>
            </section>
          </main>
        </article>
      </Host>
    );
  }
}
