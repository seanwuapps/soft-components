import { newE2EPage } from '@stencil/core/testing'

describe('sc-tab-content', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<sc-tab-content></sc-tab-content>')

    const element = await page.find('sc-tab-content')
    expect(element).toHaveClass('hydrated')
  })
})
