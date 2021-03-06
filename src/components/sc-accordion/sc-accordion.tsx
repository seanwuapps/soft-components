import { Component, Host, h, Prop, Element, Listen } from '@stencil/core'
@Component({
  tag: 'sc-accordion',
  styleUrl: 'sc-accordion.scss',
  shadow: true,
})
export class ScAccordion {
  @Element() el: HTMLElement
  /**
   * If multiple `<sc-accordion-item>`s can open at the same time
   */
  @Prop() multiple?: boolean = false

  activeItem: HTMLScAccordionItemElement

  items: NodeListOf<HTMLScAccordionItemElement>

  componentWillLoad() {
    this.items = this.el.querySelectorAll(':scope > sc-accordion-item')

    if (!this.multiple) {
      this.activeItem = this.el.querySelector(
        ':scope > sc-accordion-item[active]'
      ) as HTMLScAccordionItemElement
      if (this.activeItem) {
        this.activeItem.open()
      }
      this.closeNonActive()
    }
  }

  @Listen('opened')
  openHandler(e: Event) {
    e.stopPropagation()
    const eventTarget = e.target as HTMLScAccordionItemElement
    if (!this.multiple) {
      this.activeItem = eventTarget
      this.closeNonActive()
    }
  }

  closeNonActive() {
    this.items.forEach(item => {
      if (!item.isEqualNode(this.activeItem)) {
        item.close()
      }
    })
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    )
  }
}
