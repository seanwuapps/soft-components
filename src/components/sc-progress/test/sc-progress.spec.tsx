import { newSpecPage } from '@stencil/core/testing';
import { ScProgress } from '../sc-progress';

describe('sc-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ScProgress],
      html: `<sc-progress></sc-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <sc-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </sc-progress>
    `);
  });
});
