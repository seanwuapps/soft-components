# Getting Started

To start using these skeuomorphic components, you will need to include 2 files, spoiler alert, it's the `css` and `js` files

## Installation

### CDN

```html
<link rel="stylesheet" href="//unpkg.com/soft-components@latest/dist/soft-components/soft-components.css" />
<script type="module" src="//unpkg.com/soft-components@latest/dist/soft-components/soft-components.esm.js"></script>
<script nomodule src="//unpkg.com/soft-components@latest/dist/soft-components/soft-components.js"></script>
```

### Install via npm
```bash
npm i soft-components
```

After installation you can import the css and the js files or reference them in your html
```javascript
import { applyPolyfills, defineCustomElements } from 'soft-components/dist/loader';

///...

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```


## Framework integration

[StencilJs](https://stenciljs.com/) provides a comprehensive [documentation](https://stenciljs.com/docs/overview) on how the web components can be integrated with popular JavaScript frameworks, they can be found here:
- [Angular](https://stenciljs.com/docs/angular)
- [React](https://stenciljs.com/docs/react)
- [Vue](https://stenciljs.com/docs/vue)
- [Ember](https://stenciljs.com/docs/ember) 

