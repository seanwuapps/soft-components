import { newE2EPage } from '@stencil/core/testing';

describe('sc-accordion-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-accordion-item></sc-accordion-item>');

    const element = await page.find('sc-accordion-item');
    expect(element).toHaveClass('hydrated');
  });
});
