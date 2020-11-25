---
title: Getting started
description: How to start using soft components in your project.
---

# Getting started

To start using these neumorphism components, you will need to include 2 files, spoiler alert, it's the `css` and `js` files

## Installation

There are a few ways you can get started with Soft Components:

### CDN

```html
<link rel="stylesheet" href="//unpkg.com/soft-components/dist/soft-components/soft-components.css" />
<script type="module" src="//unpkg.com/soft-components/dist/soft-components/soft-components.esm.js"></script>

<!-- For IE only -->
<script nomodule src="//unpkg.com/soft-components/dist/soft-components/soft-components.js"></script>
```
### Install via npm
```bash
npm i soft-components
```

#### JS framework integration

[StencilJs](https://stenciljs.com/) provides a comprehensive [documentation](https://stenciljs.com/docs/overview) on how the web components can be integrated with popular JavaScript frameworks, they can be found here:
- [Angular](https://stenciljs.com/docs/angular)
- [React](https://stenciljs.com/docs/react)
- [Vue](https://stenciljs.com/docs/vue)
- [Ember](https://stenciljs.com/docs/ember) 


## CSS framework integration
Soft components should work with most frameworks as all the styles are scoped within each component. 
All soft component CSS variables starts with `--sc-` to avoid collision.
All CodePen demos you'll see will use Twitter Bootstrap's grid system. 
