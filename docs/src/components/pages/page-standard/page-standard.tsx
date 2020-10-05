import { Component, Host, h, Prop, Watch, State, Element, Build } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { md } from '../../../helpers/md';
import SimpleBar from 'simplebar';
@Component({
  tag: 'page-standard',
  styleUrl: 'page-standard.scss',
})
export class PageStandard {
  @Element() el: HTMLElement;

  /**
   * url params matcher
   */
  @Prop() match: MatchResults;

  @State() loading: boolean = false;
  @State() notfound: boolean = false;

  @State() content: string;

  @Prop() history: RouterHistory;

  // private content = '';
  @Watch('match')
  async loadPage() {
    const { page } = this.match.params;
    console.log({ page });

    this.loading = true;
    try {
      let response = await fetch('/site-content/pages/' + page + '.md');
      if (response.status !== 200) {
        throw new Error("Page doesn't exist");
      }

      this.notfound = false;
      let text = await response.text();
      this.content = md.render(text);
    } catch (error) {
      this.notfound = true;
    } finally {
      this.loading = false;
    }
  }

  async componentDidLoad() {
    await this.loadPage();
  }

  componentDidRender() {
    if (Build.isBrowser) {
      this.el.querySelectorAll('.hljs').forEach(el => {
        new SimpleBar(el as HTMLElement, { autoHide: false });
        el.classList.add('raised-4');
      });
    }
  }

  render() {
    if (this.notfound) {
      return <page-notfound></page-notfound>;
    }

    if (this.loading) {
      return <p>Loading...</p>;
    }
    const { page } = this.match.params;
    return (
      <Host>
        <div class="content" innerHTML={this.content}></div>
        <div class="content-bottom text-center text-left-lg">
          <sc-button block bordered flat icon-text href={`https://github.com/seanwuapps/soft-components/edit/master/docs/src/site-content/pages/${page}.md`} target="_blank">
            <box-icon name="edit-alt" color="currentColor"></box-icon>
            Edit this page
          </sc-button>
        </div>
      </Host>
    );
  }
}
