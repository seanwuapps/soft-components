import { newSpecPage } from '@stencil/core/testing'
import { ScButton } from '../sc-button'
describe('sc-button', () => {
  it('builds', () => {
    expect(new ScButton()).toBeTruthy()
  })
  it('should render default button', async () => {
    const page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button>button</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('should render a tag when href is applied', async () => {
    const page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button href="#" target="_blank" rel="noreferrer" download>button</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('should render block button when block prop is applied', async () => {
    const page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button block>button</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('should render icon-only button when icon prop is applied', async () => {
    const page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button icon>I</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()
  })

  it('should render bordered button when bordered prop is applied', async () => {
    const page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button bordered>Button</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()
  })
  it('should render a combination of different styles when props are applied', async () => {
    let page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button icon bordered>Button</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()

    page = await newSpecPage({
      components: [ScButton],
      html: `<sc-button block bordered>Button</sc-button>`,
    })
    expect(page.root).toMatchSnapshot()
  })
})
