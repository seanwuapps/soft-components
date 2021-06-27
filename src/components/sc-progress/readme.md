# sc-progress



<!-- Auto Generated Below -->


## Usage

### Sc-progress

<div class="intro">
Neumorphic style progress indicator. Supports both linear (bar) and circular (ring) styles, with various options for size, color and label 
</div>


### Linear progress bar
The progress is set by the `percentage` attribute, make sure it's a number between 0 to 100.
You can add label on to the progress bar by setting the `label` attribute. 
`--sc-progress-color` and `--sc-progress-label-color` custom CSS properties are available for customising the colors.
```html
<sc-progress percentage="20" label="20%"></sc-progress>
<sc-progress percentage="40" label="40%" style="--sc-progress-height: 4px"></sc-progress>
<sc-progress percentage="60" label="60%" style="--sc-progress-color: blue; --sc-progress-label-color: white"></sc-progress>
```

### Circular progress ring
Simply add `circular` attribute to turn a progress bar to a progress ring. 
You can also adjust the `size` attribute to fit your needs. 
Here are some examples

```html
<sc-progress percentage="0" circular label="0_0" radius="50"></sc-progress>
<sc-progress percentage="40" circular radius="30"></sc-progress>
<sc-progress percentage="60" label="60%" circular radius="50" style="--sc-progress-color: red"></sc-progress>
<sc-progress percentage="90" label="90%" circular radius="70" style="--sc-progress-color: lime"></sc-progress>
<sc-progress percentage="100" label="Done" circular radius="100" style="--sc-progress-color: #3399aa"></sc-progress>
```

### Indeterminate state

Add `indeterminate` attribute when you don't know how much progress is made. Perfect for loading animation.

```html
<sc-progress indeterminate></sc-progress>
<sc-progress indeterminate style="--sc-progress-height: 4px"></sc-progress>
<sc-progress indeterminate circular></sc-progress>
<sc-progress indeterminate circular label="Loading" radius="100" ></sc-progress>
```



## Properties

| Property        | Attribute       | Description                                                                                       | Type      | Default |
| --------------- | --------------- | ------------------------------------------------------------------------------------------------- | --------- | ------- |
| `angleGap`      | `angle-gap`     |                                                                                                   | `number`  | `0`     |
| `circular`      | `circular`      | Set shape of the progress indicator to be circular                                                | `boolean` | `false` |
| `indeterminate` | `indeterminate` | Use indeterminate mode for the progress bar when you do not know how long an operation will take. | `boolean` | `false` |
| `label`         | `label`         | Label to be displayed inside the progress                                                         | `string`  | `''`    |
| `percentage`    | `percentage`    | Percentage of progress bar                                                                        | `number`  | `null`  |
| `radius`        | `radius`        | radius for circular progress in pixels                                                            | `number`  | `50`    |


## CSS Custom Properties

| Name                                      | Description                                                                                                      |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| `--sc-progress-animation-duration`        | Animation duration of the indeterminate progress bar - default: 2s                                               |
| `--sc-progress-animation-timing-function` | Animation timing function of the indeterminate progress bar - default: var(--sc-animation-timing-function, ease) |
| `--sc-progress-border-radius`             | Radius of the progress bar - default: var(--sc-border-radius, 8px)                                               |
| `--sc-progress-circular-initial-rotate`   | Initial rotation of the progress ring. 0 means starting from right-center - default: 90deg                       |
| `--sc-progress-circular-size`             | Width and height of the circular progress bar - default: 100px                                                   |
| `--sc-progress-color`                     | Color of the inner progress bar - default: var(--sc-active-color, #3ab877)                                       |
| `--sc-progress-height`                    | Height of the progress bar - default: var(--sc-root-spacing, 8px)                                                |
| `--sc-progress-label-color`               | Color of the progress label - default: currentColor                                                              |
| `--sc-progress-padding-x`                 | Horizontal inner padding - default: 4px                                                                          |
| `--sc-progress-padding-y`                 | Vertical inner padding - default: 4px                                                                            |
| `--sc-progress-width`                     | Width of the progress bar - default: 100%                                                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
