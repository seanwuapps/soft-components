import { newE2EPage } from '@stencil/core/testing'

describe('sc-tab-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<sc-tab-button></sc-tab-button>')

    const element = await page.find('sc-tab-button')
    expect(element).toHaveClass('hydrated')
  })
})
