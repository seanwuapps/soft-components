import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import md from '../../../helpers/md';
@Component({
  tag: 'page-standard',
  styleUrl: 'page-standard.scss',
})
export class PageStandard {
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

  componentDidLoad() {
    this.loadPage();
  }

  render() {
    if (this.notfound) {
      return <page-notfound></page-notfound>;
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
