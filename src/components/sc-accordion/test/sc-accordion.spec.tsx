import { newSpecPage } from '@stencil/core/testing';
import { ScAccordion } from '../sc-accordion';

describe('sc-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScAccordion],
      html: `<sc-accordion></sc-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-accordion>
    `);
  });
});
