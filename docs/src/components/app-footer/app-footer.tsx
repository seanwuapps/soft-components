import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
})
export class AppFooter {
  render() {
    return (
      <Host>
        <div class="flex text-center">
          <div class="w mt-2">
            <sc-button href="https://github.com/seanwuapps/soft-components" target="_blank" rel="noreferrer">
              <box-icon type="logo" size="sm" name="github" color="currentColor"></box-icon>
              <br />
              GitHub
            </sc-button>
          </div>
        </div>
        <p>
          <a href="https://seanwuapps.com" target="_blank">
            seanwuapps.com
          </a>
        </p>
      </Host>
    );
  }
}
