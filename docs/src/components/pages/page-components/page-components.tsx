import { Component, Host, h, Prop, Watch, State, Element, Build } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent, JsonDocsProp } from '../../../../docs-data';
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

  @State() filteredProps: Array<JsonDocsProp> = [];

  @Watch('match')
  async loadComponent() {
    const { tag } = this.match.params;
    if (tag.startsWith('sc-')) {
      this.component = await this.getComponentData(tag);
      this.filteredProps = this.component?.props;
    }
  }

  getComponentData(tag) {
    return docsData.components.find(component => component.tag === tag);
  }

  async componentWillLoad() {
    await this.loadComponent();
  }

  componentDidRender() {
    if (Build.isBrowser) {
      this.el.querySelectorAll('.table-body').forEach(el => {
        new SimpleBar(el as HTMLElement, { autoHide: false });
      });
    }
  }

  togglePropSearchBar() {
    this.searchBarOpen = !this.searchBarOpen;
    if (this.searchBarOpen) {
      const searchField = this.el.querySelector('#prop-search-input') as any;
      searchField.setFocus();
    }
  }

  search(e) {
    const query = e.target.value;
    if (query === '') {
      this.filteredProps = this.component.props;
    }

    const filteredProps = this.component.props.filter(prop => {
      return JSON.stringify(prop).toLowerCase().includes(query.toLowerCase());
    });
    this.filteredProps = [...filteredProps];
  }

  render() {
    const { tag } = this.match.params;
    if (!tag || !this.component) {
      return <page-notfound></page-notfound>;
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
            </section>
            {/* Usage */}
            {this.component.usage[tag] && (
              <section>
                <linkable-title id="usage">Usage</linkable-title>
                <code-block code={this.component.usage[tag]} component={this.component}></code-block>
              </section>
            )}

            {/* Props */}
            {this.component.props && (
              <section>
                <linkable-title id="props">Props</linkable-title>

                <div class="props-container table">
                  <div class="table-head py-1 align-center raised-2 sticky">
                    <div class="w-2 pl-2">Name</div>
                    <div class="w-5">Description</div>
                    <div class="w-2">Type</div>
                    <div class="w-1">Default</div>
                    <div class="w-1 text-center">
                      <sc-button class="w-1 search-btn" icon onClick={() => this.togglePropSearchBar()}>
                        <box-icon class="search-btn" name="search" color="currentColor"></box-icon>
                      </sc-button>
                    </div>
                    <div class={`props-search-bar ${this.searchBarOpen && 'active'}`}>
                      <sc-input engraved="2" class="w-9" id="prop-search-input" type="search" placeholder="Search" onInput={e => this.search(e)}></sc-input>

                      <sc-button flat class="w-1 px-1 search-btn" icon onClick={() => this.togglePropSearchBar()}>
                        <box-icon name="x" color="currentColor"></box-icon>
                      </sc-button>
                    </div>
                  </div>
                  <div class="table-body engraved-1">
                    {this.filteredProps.map(prop => (
                      <div class="flex">
                        <div class="w-2 py-2 pl-1">
                          <linkable-title id={`props-${prop.name}`} tag="code" class="prop__title">
                            {prop.name}
                          </linkable-title>
                        </div>
                        <div class="w-5 py-2" innerHTML={md.render(prop.docs)}></div>
                        <div class="w-2 py-2">
                          <code>{prop.type}</code>
                        </div>
                        <div class="w-1 py-2">
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
              <linkable-title anchor="customisation">Customisation</linkable-title>
              <h6>How should you customise this component?</h6>
              <div class="mt-1">{this.component.encapsulation === 'shadow' ? 'CSS variables only' : 'All styles can be overridden with CSS'}</div>
            </section>
          </main>
        </article>
      </Host>
    );
  }
}
