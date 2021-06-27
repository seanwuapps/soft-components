import { Component, Host, h, State } from '@stencil/core';
import { renderPage } from '../../../helpers/page';
import state from '../../../store';
@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {
  @State() loading: boolean = false;

  @State() notfound: boolean = false;

  async componentWillLoad() {
    await renderPage('index');
  }
  render() {
    return (
      <Host>
        <seo-tags pageTitle="Home" description="A set of decorative web components inspired by the neumorphism design"></seo-tags>
        <div class="flex justify-between">
          <div class="w-6">
            <div innerHTML={state.page.content}></div>
          </div>
          <div class="w-4 px-2">
            <sc-card engraved>
              <h5>Get in touch</h5>
              <p>I love talking to people to see how things can be improved.</p>
              <sc-button
                block
                icon-text
                href="&#77;&#97;&#105;&#108;&#84;&#111;&#58;&#115;&#101;&#97;&#110;&#119;&#117;&#97;&#112;&#112;&#115;&#64;&#103;&#109;&#97;&#105;&#108;&#46;&#99;&#111;&#109;"
              >
                <box-icon name="send" color="currentColor"></box-icon>
                <span>Drop an email</span>
              </sc-button>
            </sc-card>
          </div>
        </div>
      </Host>
    );
  }
}
