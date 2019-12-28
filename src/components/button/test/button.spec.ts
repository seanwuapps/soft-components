import { newSpecPage } from "@stencil/core/testing";
import { Button } from "../button";
describe("button", () => {
  it("builds", () => {
    expect(new Button()).toBeTruthy();
  });
  it("should render default button", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<sc-button>button</sc-button>`
    });
    expect(page.root.shadowRoot).toBeTruthy();
    expect(page.root).toMatchSnapshot();
  });

  it("should render a tag when href is applied", async () => {
    const page = await newSpecPage({
      components: [Button],
      html: `<sc-button href="#" target="_blank" rel="noreferrer" download>button</sc-button>`
    });
    expect(page.root).toMatchSnapshot();
  });
});
