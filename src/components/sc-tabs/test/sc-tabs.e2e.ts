import { newE2EPage } from '@stencil/core/testing'

describe('sc-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<sc-tabs></sc-tabs>')

    const element = await page.find('sc-tabs')
    expect(element).toHaveClass('hydrated')
  })
})
