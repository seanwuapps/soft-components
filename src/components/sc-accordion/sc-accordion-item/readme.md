# sc-accordion-item



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute     | Description                                                                                                                                                           | Type      | Default |
| ------------ | ------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- | ------- |
| `active`     | `active`      | If the accordion item should be opened by default                                                                                                                     | `boolean` | `false` |
| `autoHeight` | `auto-height` | If expanded height should be automatically calculated. If set, the `--sc-accordion-item-body-max-height` CSS variable will be set automatically to the content height | `boolean` | `true`  |
| `heading`    | `heading`     | Heading text. This will be overwritten by `heading` slot                                                                                                              | `string`  | `null`  |
| `headingTag` | `heading-tag` | The HTML tag to be applied to the heading text. This will be overwritten by `heading` slot                                                                            | `string`  | `'h3'`  |


## Events

| Event     | Description                                 | Type               |
| --------- | ------------------------------------------- | ------------------ |
| `closed`  | Emitted when accordion item has closed      | `CustomEvent<any>` |
| `closing` | Emitted when accordion item started closing | `CustomEvent<any>` |
| `opened`  | Emitted when accordion item has opened      | `CustomEvent<any>` |
| `opening` | Emitted when accordion item started opening | `CustomEvent<any>` |


## Methods

### `close() => Promise<void>`

Closes the accordion item

#### Returns

Type: `Promise<void>`



### `open() => Promise<void>`

Opens the accordion item.

#### Returns

Type: `Promise<void>`



### `toggle() => Promise<void>`

Toggle open state of accordion item

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                                        | Description                                          |
| ------------------------------------------- | ---------------------------------------------------- |
| `--sc-accordion-animation-duration`         | var(--sc-animation-duration, 0.2s);                  |
| `--sc-accordion-animation-timing-function`  | var(--sc-animation-timing-function,ease-in-out);     |
| `--sc-accordion-item-body-bg-color`         | var(--sc-bg-color, #f1f1f1);                         |
| `--sc-accordion-item-body-max-height`       | 100vh;                                               |
| `--sc-accordion-item-body-padding-x`        | calc(var(--sc-root-spacing, 8px) * 2);               |
| `--sc-accordion-item-body-padding-y`        | calc(var(--sc-root-spacing, 8px) * 2);               |
| `--sc-accordion-item-heading-bg-color`      | var(--sc-bg-color, #f1f1f1);                         |
| `--sc-accordion-item-heading-border-bottom` | 1px solid var(--sc-shadow-color,rgba(0, 0, 0, 0.2)); |
| `--sc-accordion-item-heading-padding-x`     | calc(var(--sc-root-spacing, 8px) * 2);               |
| `--sc-accordion-item-heading-padding-y`     | calc(var(--sc-root-spacing, 8px) * 2);               |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
