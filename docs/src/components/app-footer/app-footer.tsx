import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-footer',
  styleUrl: 'app-footer.scss',
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
        <div>
          <a href="https://seanwuapps.com" target="_blank" rel="noreferrer" class="sw-link">
            <seanwu-logo></seanwu-logo>
          </a>
        </div>
      </Host>
    );
  }
}
