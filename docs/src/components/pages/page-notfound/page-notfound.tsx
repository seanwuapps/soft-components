import { Component, Host, h } from '@stencil/core';

import notFoundSVG from '../../../assets/img/404.svg';
@Component({
  tag: 'page-notfound',
  styleUrl: 'page-notfound.scss',
})
export class PageNotfound {
  render() {
    return (
      <Host>
        <div class="page-not-found pt-4">
          <sc-card engraved class="text-center pa-4">
            <img class="not-found-image mb-2" src={notFoundSVG} alt="Alien abduction illustration" />
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
