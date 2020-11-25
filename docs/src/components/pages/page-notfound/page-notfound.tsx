import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-notfound',
  styleUrl: 'page-notfound.scss',
})
export class PageNotfound {
  render() {
    return (
      <Host>
        <seo-tags page-title="Oops..." description="Oops the requested page cannot be found."></seo-tags>
        <div class="page-not-found">
          <sc-card engraved class="text-center pa-4">
            <img class="not-found-image mb-2" src="/assets/img/404.svg" alt="Alien abduction illustration" />
            <h2 class="mb-2">Sorry, that page has been abducted.</h2>
            <sc-button href="/" icon-text>
              <box-icon name="arrow-back" color="var(--sc-text-color)"></box-icon>
              Back to safety
            </sc-button>
          </sc-card>
        </div>
      </Host>
    );
  }
}
