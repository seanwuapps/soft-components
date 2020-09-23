# Web components

Soft Components are compiled into [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components), this means it's supported by all modern browsers regardless of which JavaScript framework you might use.

I've written a [blog post](https://seanwuapps.com/blog/web-component-the-best-pathway-to-your-next-design-system/) about Web Components and the benefits of using them if you're interested in learning further. 


## Using web components

Because web components are custom HTML elements, in order to distinguish them from the native HTML elements, there are a few rules we need to follow:
- Do not use self-closing tags. `<sc-button />` will **not** be recognised. Always use the open-close pairs like `<sc-button></sc-button>`
- All Soft Components has `sc-` in the beginning of their tags because custom elements need to be unique. So beware if you're intended to use any other component library that uses a `sc-` prefix.


## Component sandbox

All component documentation pages contains the code preview area that allows you to play with the provided CSS properties and different props. We also included a link to view the elements in Codepen so you can experiment with it further. 




