import state from '../store';
import { md } from './md';

export async function renderPage(pageName: string): Promise<string | boolean> {
  state.page.loading = true;
  state.page.content = null;
  try {
    let response = await fetch(`/site-content/pages/${pageName}.md`);
    if (response.status !== 200) {
      throw new Error("Page doesn't exist");
    }

    let text = await response.text();
    state.page.content = md.render(text);
    state.page.meta = md.meta;
  } catch (error) {
    return false;
  } finally {
    state.page.loading = false;
  }
}
