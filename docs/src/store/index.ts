import { createStore } from '@stencil/store';

const { state } = createStore({
  themeIsDark: false,
  mobileMenuOpen: false,
  page: {
    loading: false,
    heading: null,
    meta: null,
    content: null,
  },
});

export default state;
