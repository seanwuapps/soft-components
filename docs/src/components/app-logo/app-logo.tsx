import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-logo',
  styleUrl: 'app-logo.scss',
})
export class AppLogo {
  render() {
    return <img src="/assets/img/logo.svg" alt="Logo" />;
  }
}
