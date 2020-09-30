import { newSpecPage } from '@stencil/core/testing';
import { ScAccordionItem } from '../sc-accordion-item';

describe('sc-accordion-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScAccordionItem],
      html: `<sc-accordion-item></sc-accordion-item>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-accordion-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-accordion-item>
    `);
  });
});
