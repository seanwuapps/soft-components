import { Component, Host, h, Prop, Watch, State, Element } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent } from '../../../../docs-data';
import { getName } from '../../../helpers/components';
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
  @State() searchBarOpen: boolean = false;

  @Watch('match')
  async loadComponent() {
    const { tag } = this.match.params;
    if (tag.startsWith('sc-')) {
      this.component = this.getComponentData(tag);
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

  togglePropSearchBar() {
    this.searchBarOpen = !this.searchBarOpen;
  }

  search(e) {
    const query = e.target.value;
    console.log({ query });
  }

  render() {
    const { tag } = this.match.params;
    if (!tag) {
      return (
        <div>
          <h1>Components</h1>
          <p>Use the site navigation to find a component you desire.</p>
        </div>
      );
    }
    const name = getName(this.component);

    console.log(name, this.component);
    return (
      <Host>
        <article class="flex align-stretch">
          {/* Main */}
          <main class="w-8">
            {/* Title */}
            <section class="component-title">
              <h1>{name}</h1>
              <code>&lt;{tag}&gt;</code>
            </section>
            {/* Usage */}
            {this.component.usage[tag] && (
              <section>
                <linkable-title anchor="usage">Usage</linkable-title>
                <code-block code={this.component.usage[tag]}></code-block>
              </section>
            )}

            {/* Props */}
            {this.component.props && (
              <section>
                <linkable-title anchor="props">Props</linkable-title>

                <div class="props-container table">
                  <div class="table-head py-2 flex raised-2 sticky">
                    <div class={`props-search-bar raised-shadow-1 round pa-1 ${this.searchBarOpen && 'active'}`}>
                      <sc-input type="search" placeholder="Search" onInput={e => this.search(e)}></sc-input>
                    </div>
                    <div class="w-2 pl-2">Name</div>
                    <div class="w-4">Description</div>
                    <div class="w-2">Type</div>
                    <div class="w-2">Default</div>
                    <div class="w-1 pr-1 text-right">
                      <box-icon class="search-btn" onClick={() => this.togglePropSearchBar()} name="search" color="currentColor"></box-icon>
                    </div>
                  </div>
                  <div class="table-body engraved-1">
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
                        <div class="w-1 pr-1">&nbsp;</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Customisation */}
            <section>
              <h6>How can I customise this component?</h6>
              <div class="mt-1">{this.component.encapsulation === 'shadow' ? 'CSS variables only' : 'All styles can be overridden with CSS'}</div>
            </section>
          </main>
        </article>
      </Host>
    );
  }
}
