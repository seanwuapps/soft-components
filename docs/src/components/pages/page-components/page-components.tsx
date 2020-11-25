import { Component, Host, h, Prop, Watch, State, Element, Build } from '@stencil/core';
import { MatchResults } from '@stencil/router';
import docsData from '../../../../docs-data';
import { JsonDocsComponent, JsonDocsProp } from '../../../../docs-data';
import { getName } from '../../../helpers/components';
import { md, mdUsage } from '../../../helpers/md';
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

      this.el.querySelectorAll('code-block').forEach(el => {
        el.component = this.component;
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

    const { usage, methods } = this.component;

    return (
      <Host>
        <seo-tags page-title={name}></seo-tags>
        <article>
          {/* Title */}
          <section class="component-title">
            <h1>{name}</h1>
          </section>
          {/* Usage */}
          {usage[tag] && (
            <section class="usage">
              <linkable-title id="usage" tag="h2">
                Usage
              </linkable-title>
              <div innerHTML={mdUsage.render(usage[tag])}></div>
            </section>
          )}
          {/* Props */}
          {this.component.props && (
            <section>
              <linkable-title id="Props" tag="h2">
                Props
              </linkable-title>

              <div class="table-container">
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
          {/* Events */}
          {this.component.events.length > 0 && (
            <section>
              <linkable-title id="Events" tag="h2">
                Events
              </linkable-title>
              <div class="table-container">
                <div class="table">
                  <div class="table-head raised-2 sticky">
                    <div class="w-2 th">Event</div>
                    <div class="w-5 th">Description</div>
                    <div class="w-3 th">Event detail</div>
                  </div>
                  <div class="table-body engraved-1">
                    {this.component.events.map(event => (
                      <div class="flex tr">
                        <div class="w-2 py-2">
                          <span class="th-mobile">Event</span>
                          <linkable-title id={`events-${event.event}`} tag="code" class="event__title">
                            {event.event}
                          </linkable-title>
                        </div>
                        <div class="w-5 py-2">
                          <span class="th-mobile">Description</span>
                          <span innerHTML={md.render(event.docs)}></span>
                        </div>
                        <div class="w-2 py-2">
                          <span class="th-mobile">Event detail</span>
                          <code>{event.detail}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
          {/* Methods */}
          {methods.length > 0 && (
            <section>
              <linkable-title id="Methods" tag="h2">
                Methods
              </linkable-title>
              <div class="table-container">
                <div class="table">
                  <div class="table-head raised-2 sticky">
                    <div class="w-2 th">Method</div>
                    <div class="w-5 th">Description</div>
                    <div class="w-3 th">Signature</div>
                  </div>
                  <div class="table-body engraved-1">
                    {methods.map(method => (
                      <div class="flex tr">
                        <div class="w-2 py-2">
                          <span class="th-mobile">Method</span>
                          <linkable-title id={`methods-${method.name}`} tag="code" class="method__title">
                            {method.name}
                          </linkable-title>
                        </div>
                        <div class="w-5 py-2">
                          <span class="th-mobile">Description</span>
                          <span innerHTML={md.render(method.docs)}></span>
                        </div>
                        <div class="w-3 py-2">
                          <span class="th-mobile">Signature</span>
                          <code>{method.signature}</code>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}
        </article>

        {/* comments */}
        <section class="comments mt-4">
          <h4>Comments</h4>
          <p>
            Leave your thoughts here and it becomes a GitHub issue! Thanks to the magic of{' '}
            <a href="https://utteranc.es" target="_blank" rel="noopener noreferrer">
              Utterances
            </a>
          </p>
          <div class="mt-2">
            <utterances-div
              repo="seanwuapps/soft-components"
              issue-term="pathname"
              theme={store.state.themeIsDark ? 'photon-dark' : 'github-light'}
              crossorigin="anonymous"
              async
            ></utterances-div>
          </div>
        </section>
      </Host>
    );
  }
}
