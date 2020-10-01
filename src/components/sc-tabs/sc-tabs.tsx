import { Component, Host, h, Element, Prop } from '@stencil/core'

@Component({
  tag: 'sc-tabs',
  styleUrl: 'sc-tabs.scss',
  // shadow: true
})
export class Tabs {
  @Element() el: HTMLElement

  tabButtons: HTMLScTabButtonElement[] = []

  @Prop() transition: string | undefined = ''

  async connectedCallback() {
    this.tabButtons = Array.from(this.el.querySelectorAll('sc-tab-button'))

    // by default, set first tab to be active
    if (!this.el.querySelector('sc-tab-button[active]')) {
      this.tabButtons[0].setActive(false)
    }
  }

  handleActive(tb: HTMLScTabButtonElement) {
    this.tabButtons.map(el => {
      el.setInactive()
    })
    tb.setActive(false)
  }

  render() {
    const { transition } = this
    return (
      <Host
        class={`tabs${
          transition.length > 0 ? ' transition-' + transition : ''
        }`}
        onActiveEvent={e => this.handleActive(e.target)}
      >
        <slot></slot>
      </Host>
    )
  }
}
