import { newE2EPage } from '@stencil/core/testing';

describe('sc-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<sc-progress></sc-progress>');

    const element = await page.find('sc-progress');
    expect(element).toHaveClass('hydrated');
  });
});
