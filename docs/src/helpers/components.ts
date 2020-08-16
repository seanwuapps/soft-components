import { NavItem } from './defs';
export const list = ['button', 'card', 'input', 'tab-button', 'tab-content', 'tabs', 'toggle'];
export const buildComponentNavArray: () => NavItem[] = function () {
  return list.map(item => ({
    text: item,
    url: '/components/sc-' + item,
  }));
};
