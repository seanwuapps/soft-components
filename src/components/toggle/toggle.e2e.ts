import { newE2EPage } from '@stencil/core/testing';

describe('sc-toggle', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-toggle></sc-toggle>');

    const element = await page.find('sc-toggle');
    expect(element).toHaveClass('hydrated');
  });
});
