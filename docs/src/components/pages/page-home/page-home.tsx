import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {
  render() {
    return (
      <Host>
        <div class="flex">
          <h1>Soft components</h1>
          <div>
            <h2>A set of neumorphism components</h2>
            <h3>Framework agnostic</h3>
            <p>
              Soft components are{' '}
              <a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components" target="_blank">
                Web Components
              </a>
              , utilising the browser's capability, the components work with (and without) any JavaScript framework.
            </p>
            <p>
              Find out <stencil-route-link url="/framework-integration"> how to integrate with your favourite framework</stencil-route-link>.
            </p>
            <h3>Highly customisable</h3>
          </div>
        </div>
      </Host>
    );
  }
}
