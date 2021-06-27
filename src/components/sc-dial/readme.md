# sc-dial



<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                         | Type     | Default     |
| -------- | --------- | ------------------------------------------------------------------- | -------- | ----------- |
| `max`    | `max`     | Max value of dial                                                   | `number` | `undefined` |
| `min`    | `min`     | Min value of dial                                                   | `number` | `undefined` |
| `size`   | `size`    | Diameter in pixels (can be changed via CSS variable --sc-dial-size) | `number` | `80`        |
| `step`   | `step`    | Step value of each change                                           | `number` | `1`         |
| `value`  | `value`   |                                                                     | `number` | `50`        |


## Events

| Event          | Description                             | Type                         |
| -------------- | --------------------------------------- | ---------------------------- |
| `blurEvent`    | Emitted when the input loses focus.     | `CustomEvent<void>`          |
| `changeEvent`  | Emitted when the value has changed.     | `CustomEvent<any>`           |
| `focusEvent`   | Emitted when the input has focus.       | `CustomEvent<void>`          |
| `inputEvent`   | Emitted when a keyboard input occurred. | `CustomEvent<KeyboardEvent>` |
| `keyDownEvent` | Emitted when a key is pressed down      | `CustomEvent<void>`          |


## Methods

### `setValue(value: any) => Promise<void>`



#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name             | Description                                         |
| ---------------- | --------------------------------------------------- |
| `--sc-dial-size` | Size (diameter) of the dial control - default: 80px |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
