import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'page-home',
  styleUrl: 'page-home.css',
})
export class PageHome {
  render() {
    return (
      <Host>
        <div class="flex justify-between">
          <div class="w-4">
            <h3>Soft components</h3>
            <p>A set of neumorphism components</p>
          </div>
          <div class="w-4">
            <h4>Framework agnostic</h4>
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
            <h4>Highly customisable</h4>
            <p>Every component has a set of CSS variables allowing you to theme it to suit your needs</p>
            <p>There are also a number of attributes that can be used to give your component a different look and feel</p>
            <p>There is a sandbox area for each component in the docs.</p>
          </div>
        </div>
      </Host>
    );
  }
}
