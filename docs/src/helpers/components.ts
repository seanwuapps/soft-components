import { NavItem } from './defs';
export const list = ['button', 'tab'];
export const buildComponentNavArray: () => NavItem[] = function () {
  return list.map(item => ({
    text: item,
    url: '/components/sc-' + item,
  }));
};
