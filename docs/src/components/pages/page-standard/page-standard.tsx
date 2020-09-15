import { Component, Host, h, Prop, Watch, State, Element, Build } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import md from '../../../helpers/md';
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
      return (
        <div>
          <h1>standard</h1>
          <page-notfound></page-notfound>
        </div>
      );
    }

    if (this.loading) {
      return <p>Loading...</p>;
    }
    return (
      <Host>
        <div innerHTML={this.content}></div>
      </Host>
    );
  }
}
