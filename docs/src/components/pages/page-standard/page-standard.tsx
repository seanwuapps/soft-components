import { Component, Host, h, Prop, Watch, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import md from 'markdown-it';
import hljs from 'highlight.js';

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

  private md = md({
    highlight: function (str, lang) {
      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
        } catch (__) {}
      }
      return '<pre class="hljs"><code>' + md.utils.escapeHtml(str) + '</code></pre>';
    },
  });

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
      this.content = this.md.render(text);
    } catch (error) {
      this.notfound = true;
    } finally {
      this.loading = false;
    }
  }

  componentDidLoad() {
    console.log('will load');
    this.loadPage();
  }

  render() {
    if (this.notfound) {
      return (
        <div class="page-not-found">
          <div>
            <h1>Sorry, that page doesn't exist.</h1>
            <sc-button block href="/">
              Back to safety
            </sc-button>
          </div>
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
