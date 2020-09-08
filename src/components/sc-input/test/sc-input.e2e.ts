import { newE2EPage } from '@stencil/core/testing';

describe('sc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-input></sc-input>');

    const element = await page.find('sc-input');
    expect(element).toHaveClass('hydrated');
  });
});
