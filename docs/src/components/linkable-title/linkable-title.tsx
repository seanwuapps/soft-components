import { Component, Host, h, Prop, Element, State } from '@stencil/core';

@Component({
  tag: 'linkable-title',
  styleUrl: 'linkable-title.scss',
})
export class LinkableTitle {
  @Element() el: HTMLElement;
  @Prop() tag: string = 'h3';
  @Prop({ reflectToAttr: true }) anchor: string;

  @State() highlight: boolean = false;

  componentDidLoad() {
    const { hash } = window.location;
    if (hash === `#${this.anchor}`) {
      this.highlight = true;
      const yOffset = -40;
      const y = this.el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  render() {
    const Tag = this.tag;
    const { highlight } = this;
    return (
      <Host class={{ highlight }}>
        <Tag>
          <a href={`#${this.anchor}`}>
            <box-icon name="link" color="var(--sc-text-color)" class="anchor"></box-icon>
            <slot></slot>
          </a>
        </Tag>
      </Host>
    );
  }
}
