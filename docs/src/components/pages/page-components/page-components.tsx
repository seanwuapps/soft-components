import { Component, Host, h, Prop, Watch, State, Element, Build } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent, JsonDocsProp } from '../../../../docs-data';
import { getName } from '../../../helpers/components';
import md from '../../../helpers/md';
import SimpleBar from 'simplebar';
import store from '../../../store';

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
        <article>
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

              <div class="props-container">
                <div class="table">
                  <div class="table-head raised-2 sticky">
                    <div class="w-2 th">Name</div>
                    <div class="w-4 th">Description</div>
                    <div class="w-2 th">Type</div>
                    <div class="w-1 th">Default</div>
                  </div>
                  <div class="table-body engraved-1">
                    {this.filteredProps.map(prop => (
                      <div class="flex tr">
                        <div class="w-2 py-2">
                          <span class="th-mobile">Name</span>
                          <linkable-title id={`props-${prop.name}`} tag="code" class="prop__title">
                            {prop.name}
                          </linkable-title>
                        </div>
                        <div class="w-4 py-2">
                          <span class="th-mobile">Description</span>
                          <span innerHTML={md.render(prop.docs)}></span>
                        </div>
                        <div class="w-2 py-2">
                          <span class="th-mobile">Type</span>
                          <code>{prop.type}</code>
                        </div>
                        <div class="w-1 py-2">
                          <span class="th-mobile">Default</span>
                          <code>{prop.default}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div class="search-container">
                  <sc-button class="w-1 search-btn" icon onClick={() => this.togglePropSearchBar()}>
                    <box-icon class="search-btn" name={this.searchBarOpen ? 'x' : 'search'} color="currentColor"></box-icon>
                  </sc-button>
                  <div class={`props-search-bar raised round ${this.searchBarOpen && 'active'}`}>
                    <sc-input engraved="2" block class="" type="search" placeholder="Search" onInput={e => this.search(e)}></sc-input>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Customisation */}
          <section>
            <linkable-title id="customisation">Customisation</linkable-title>
            <h6>How should you customise this component?</h6>
            <div class="mt-1">{this.component.encapsulation === 'shadow' ? 'CSS variables only' : 'All styles can be overridden with CSS'}</div>
          </section>
        </article>

        {/* comments */}
        <section class="comments mt-4">
          <h4>Comments</h4>
          <p>
            Leave your thoughts here and it becomes a GitHub issue! Thanks to the magic of{' '}
            <a href="https://utteranc.es" target="_blank">
              Utterances
            </a>
          </p>
          <utterances-div
            class="mt-2"
            repo="seanwuapps/soft-components"
            issue-term="pathname"
            theme={store.state.themeIsDark ? 'photon-dark' : 'github-light'}
            crossorigin="anonymous"
            async
          ></utterances-div>
        </section>
      </Host>
    );
  }
}
