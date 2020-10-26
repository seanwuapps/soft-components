import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
})
export class AppFooter {
  render() {
    return (
      <Host>
        <div class="container">

        <div class="flex text-center">
          <div class="w">
            <sc-button icon-text href="https://github.com/seanwuapps/soft-components" target="_blank" rel="noreferrer">
              <box-icon type="logo" name="github" color="currentColor" class="mr-1"></box-icon> GitHub
            </sc-button>

          </div>
          <div class="w">
            <sc-button icon-text href="https://twitter.com/softcomponents" target="_blank" rel="noreferrer">
              <box-icon type="logo" name="twitter" color="currentColor" class="mr-1"></box-icon> Twitter
            </sc-button>
          </div>
        </div>
        </div>        <div class="text-center mt-4">
          <a href="https://seanwuapps.com" target="_blank" rel="noreferrer" class="sw-link">
            <seanwu-logo></seanwu-logo>
          </a>
        </div>
      </Host>
    );
  }
}
