# sc-input



<!-- Auto Generated Below -->


## Usage

### Sc-input

<div class="intro">
Generic input component.
</div>

### *Note* 
In order to use the `sc-input` element in your normal `form` element for correct form values and validations, this component does not use shadow dom, meaning the styles can be affected by the global css stylesheets.

### Utilises the browser's built-in validations
This component passes the `type` attribute to the native `<input>` element used under the hood. So you can use types such as `email`, `number`, `tel`, `url` `password` for their supported browser validation behaviours.


### Alternative components for certain types

There are input types that has dedicated components for them. Here's a list of input types and the component we recommend you use. 

- Buttons: `sc-button`
- Color: `sc-color`
- File: coming soon 
- Range: coming soon

Basic text input
```html
<sc-input label="Text input" type="text"></sc-input>
```

You can set `engraved` level for individual inputs

```html
<sc-input engraved="1" label="Engraved 1" type="text"></sc-input>
<sc-input engraved="3" label="Engraved 3" type="text"></sc-input>
<sc-input engraved="5" label="Engraved 5" type="text"></sc-input>
```


Add the `block` attribute to make it take the full width
```html
<sc-input block label="Block input" type="text"></sc-input>
```

Radio buttons
```html
<sc-input label="One" type="radio" name="test" value="1">
</sc-input>
<sc-input label="Two" type="radio" name="test" value="2"></sc-input>
<sc-input label="Three" type="radio" name="test" value="3" disabled></sc-input>
<sc-input label="Four" type="radio" name="test" value="4"></sc-input>
```

Other input types (browser god please help)
```html
<div class="mb-5">
  date
  <sc-input type="date">
  </sc-input>
</div>
<div class="mb-5">
  datetime
  <sc-input type="datetime-local">
  </sc-input>
</div>
<div class="mb-5">
  email
  <sc-input type="email" >
  </sc-input>
</div>
<div class="mb-5">
  file
  <sc-input type="file">
  </sc-input>
</div>
<div class="mb-5">
  month
  <sc-input type="month">
  </sc-input>
</div>
<div class="mb-5">
  number
  <sc-input type="number">
  </sc-input>
</div>
<div class="mb-5">
  password
  <sc-input type="password">
  </sc-input>
</div>
<div class="mb-5">
  range
  <sc-input type="range">
  </sc-input>
</div>
<div class="mb-5">
  search
  <sc-input type="search">
  </sc-input>
</div>
<div class="mb-5">
  tel
  <sc-input type="tel">
  </sc-input>
</div>
<div class="mb-5">
  Time
  <sc-input type="time">
  </sc-input>

  Week
  <sc-input type="week">
  </sc-input>
</div>
```


<!-- <div class="mb-5">
  checkbox
  <sc-input type="checkbox">
  </sc-input>
  <input type="checkbox">
  </input>
</div>
<div class="mb-5">
  color
  <sc-input type="color">
  </sc-input>
</div>
<div class="mb-5">
  date
  <sc-input type="date">
  </sc-input>
</div>
<div class="mb-5">
  datetime
  <sc-input type="datetime-local">
  </sc-input>
</div>
<div class="mb-5">
  email
  <sc-input type="email">
  </sc-input>
</div>
<div class="mb-5">
  file
  <sc-input type="file">
  </sc-input>
</div>
<div class="mb-5">
  month
  <sc-input type="month">
  </sc-input>
</div>
<div class="mb-5">
  number
  <sc-input type="number">
  </sc-input>
</div>
<div class="mb-5">
  password
  <sc-input type="password">
  </sc-input>
</div>
<div class="mb-5">
  radio
  <sc-input type="radio">
  </sc-input>
</div>
<div class="mb-5">
  range
  <sc-input type="range">
  </sc-input>
</div>
<div class="mb-5">
  reset
  <sc-input type="reset">
  </sc-input>
</div>
<div class="mb-5">
  search
  <sc-input type="search">
  </sc-input>
</div>
<div class="mb-5">
  submit
  <sc-input type="submit">
  </sc-input>
</div>
<div class="mb-5">
  tel
  <sc-input type="tel">
  </sc-input>
</div>
<div class="mb-5">
  text
  <sc-input type="text">
  </sc-input>
</div>
<sc-input type="time">
</sc-input>
<sc-input type="url">
</sc-input>
<sc-input type="week">
</sc-input> -->



## Properties

| Property         | Attribute         | Description                                                                                                                                                                                                                                                                                                                                          | Type                                                                                  | Default     |
| ---------------- | ----------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ----------- |
| `accept`         | `accept`          | If the value of the type attribute is `"file"`, then this attribute will indicate the types of files that the server accepts, otherwise it will be ignored. The value must be a comma-separated list of unique content type specifiers.                                                                                                              | `string`                                                                              | `undefined` |
| `ariaLabelledby` | `aria-labelledby` | Aria labelby                                                                                                                                                                                                                                                                                                                                         | `string`                                                                              | `''`        |
| `autocapitalize` | `autocapitalize`  | Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.                                                                                                                                                                                                                                    | `string`                                                                              | `'off'`     |
| `autocomplete`   | `autocomplete`    | Indicates whether the value of the control can be automatically completed by the browser.                                                                                                                                                                                                                                                            | `"off" \| "on"`                                                                       | `'off'`     |
| `autocorrect`    | `autocorrect`     | Whether auto correction should be enabled when the user is entering/editing the text value.                                                                                                                                                                                                                                                          | `"off" \| "on"`                                                                       | `'off'`     |
| `autofocus`      | `autofocus`       | This Boolean attribute lets you specify that a form control should have input focus when the page loads.                                                                                                                                                                                                                                             | `boolean`                                                                             | `false`     |
| `block`          | `block`           | Takes the entire width of the row                                                                                                                                                                                                                                                                                                                    | `boolean`                                                                             | `false`     |
| `disabled`       | `disabled`        | If `true`, the user cannot interact with the input.                                                                                                                                                                                                                                                                                                  | `boolean`                                                                             | `false`     |
| `engraved`       | `engraved`        | Engrave level (0-9) note if 0 there will be no visible border around the element, so you'll need to add border via css.                                                                                                                                                                                                                              | `number`                                                                              | `1`         |
| `inputmode`      | `inputmode`       | A hint to the browser for which keyboard to display. Possible values: `"none"`, `"text"`, `"tel"`, `"url"`, `"email"`, `"numeric"`, `"decimal"`, and `"search"`.                                                                                                                                                                                     | `"decimal" \| "email" \| "none" \| "numeric" \| "search" \| "tel" \| "text" \| "url"` | `undefined` |
| `label`          | `label`           | Label for input                                                                                                                                                                                                                                                                                                                                      | `string`                                                                              | `undefined` |
| `max`            | `max`             | The maximum value, which must not be less than its minimum (min attribute) value.                                                                                                                                                                                                                                                                    | `string`                                                                              | `undefined` |
| `maxlength`      | `maxlength`       | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter.                                                                                                                                                                     | `number`                                                                              | `undefined` |
| `min`            | `min`             | The minimum value, which must not be greater than its maximum (max attribute) value.                                                                                                                                                                                                                                                                 | `string`                                                                              | `undefined` |
| `minlength`      | `minlength`       | If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter.                                                                                                                                                                     | `number`                                                                              | `undefined` |
| `multiple`       | `multiple`        | If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `"email"` or `"file"`, otherwise it is ignored.                                                                                                                                                                                          | `boolean`                                                                             | `undefined` |
| `name`           | `name`            | The name of the control, which is submitted with the form data.                                                                                                                                                                                                                                                                                      | `string`                                                                              | `''`        |
| `pattern`        | `pattern`         | A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored. | `string`                                                                              | `undefined` |
| `placeholder`    | `placeholder`     | Instructional text that shows before the input has a value.                                                                                                                                                                                                                                                                                          | `string`                                                                              | `undefined` |
| `readonly`       | `readonly`        | If `true`, the user cannot modify the value.                                                                                                                                                                                                                                                                                                         | `boolean`                                                                             | `false`     |
| `required`       | `required`        | If `true`, the user must fill in a value before submitting a form.                                                                                                                                                                                                                                                                                   | `boolean`                                                                             | `false`     |
| `size`           | `size`            | The initial size of the control. This value is in pixels unless the value of the type attribute is `"text"` or `"password"`, in which case it is an integer number of characters. This attribute applies only when the `type` attribute is set to `"text"`, `"search"`, `"tel"`, `"url"`, `"email"`, or `"password"`, otherwise it is ignored.       | `number`                                                                              | `undefined` |
| `step`           | `step`            | Works with the min and max attributes to limit the increments at which a value can be set. Possible values are: `"any"` or a positive floating point number.                                                                                                                                                                                         | `string`                                                                              | `undefined` |
| `type`           | `type`            | The type of control to display. The default type is text.                                                                                                                                                                                                                                                                                            | `string`                                                                              | `'text'`    |
| `value`          | `value`           | The value of the input.                                                                                                                                                                                                                                                                                                                              | `string`                                                                              | `''`        |


## Events

| Event          | Description                             | Type                         |
| -------------- | --------------------------------------- | ---------------------------- |
| `blurEvent`    | Emitted when the input loses focus.     | `CustomEvent<void>`          |
| `changeEvent`  | Emitted when the value has changed.     | `CustomEvent<any>`           |
| `focusEvent`   | Emitted when the input has focus.       | `CustomEvent<void>`          |
| `inputEvent`   | Emitted when a keyboard input occurred. | `CustomEvent<KeyboardEvent>` |
| `keyDownEvent` | Emitted when a key is pressed down      | `CustomEvent<void>`          |


## Methods

### `getInputElement() => Promise<HTMLInputElement>`

Returns the native `<input>` element used under the hood.

#### Returns

Type: `Promise<HTMLInputElement>`



### `setFocus() => Promise<void>`

Sets focus on the specified `sc-input`. Use this method instead of the global
`input.focus()`.

#### Returns

Type: `Promise<void>`




## CSS Custom Properties

| Name                       | Description                                                         |
| -------------------------- | ------------------------------------------------------------------- |
| `--sc-input-border-radius` | Border radius for input box - default: var(--sc-border-radius, 1em) |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
