import { NavItem } from './defs';
import { JsonDocsComponent } from '../../docs-data';
import docsData from '../../docs-data';
export const componentList = ['button', 'card', 'input', 'tab-button', 'tab-content', 'tabs', 'toggle'];
export const buildComponentNavArray: () => NavItem[] = function () {
  return docsData.components.map(component => ({
    text: getName(component),
    url: '/components/' + component.tag,
  }));
};

export const ucfirst = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
export const getKey = (component: JsonDocsComponent) => component.tag.replace('sc-', '');
export const getName = (component: JsonDocsComponent) => ucfirst(getKey(component).replace(new RegExp('-', 'g'), ' '));

export const hasSlot: (HTMLElement, string?) => boolean = (parentEl: HTMLElement, slotName?: string) => {
  return !!parentEl.querySelector(':scope > [slot="' + slotName + '"'); // cast boolean
};
