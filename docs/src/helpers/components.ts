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

export const getKey = (component: JsonDocsComponent) => component.tag.replace('sc-', '');
export const getName = (component: JsonDocsComponent) => getKey(component).replace(new RegExp('-', 'g'), ' ');
