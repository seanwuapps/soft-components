# sc-toggle



<!-- Auto Generated Below -->


## Usage

### Sc-toggle

<!-- Use it like a checkbox -->
<sc-toggle name="remember" value="1" checked="checked" label="Remember me"></sc-toggle>



## Properties

| Property             | Attribute         | Description                                                                                              | Type      | Default     |
| -------------------- | ----------------- | -------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| `ariaLabelledby`     | `aria-labelledby` | aria labelby                                                                                             | `string`  | `''`        |
| `autofocus`          | `autofocus`       | This Boolean attribute lets you specify that a form control should have input focus when the page loads. | `boolean` | `false`     |
| `checked`            | `checked`         | If this toggle is on by default                                                                          | `boolean` | `false`     |
| `disabled`           | `disabled`        | If `true`, the user cannot interact with the input.                                                      | `boolean` | `false`     |
| `label` _(required)_ | `label`           | Label text to be displayed inline with the toggle                                                        | `string`  | `undefined` |
| `name`               | `name`            | The name of the control, which is submitted with the form data.                                          | `string`  | `''`        |
| `value`              | `value`           | The value of the input.                                                                                  | `string`  | `''`        |


## Events

| Event          | Description                             | Type                         |
| -------------- | --------------------------------------- | ---------------------------- |
| `blurEvent`    | Emitted when the input loses focus.     | `CustomEvent<void>`          |
| `changeEvent`  | Emitted when the value has changed.     | `CustomEvent<any>`           |
| `focusEvent`   | Emitted when the input has focus.       | `CustomEvent<void>`          |
| `inputEvent`   | Emitted when a keyboard input occurred. | `CustomEvent<KeyboardEvent>` |
| `keyDownEvent` | Emitted when a key is pressed down      | `CustomEvent<void>`          |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
