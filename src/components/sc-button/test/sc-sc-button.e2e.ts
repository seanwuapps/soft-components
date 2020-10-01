import { newE2EPage } from '@stencil/core/testing'

describe('sc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage()
    await page.setContent('<sc-button></sc-button>')

    const element = await page.find('sc-button')
    expect(element).toHaveClass('hydrated')
  })
})
