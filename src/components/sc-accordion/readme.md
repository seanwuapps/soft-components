# sc-accordion



<!-- Auto Generated Below -->


## Usage

### Sc-accordion

<div class="intro">
Head over to <a href="/components/sc-accordion-item"><code>sc-accordion-item</code></a> for more details about properties, events and methods on that component.
</div>

### Single (default)

By default only one `<sc-accordion-item>` element inside a `<sc-accordion>` can be expanded at any given time. When clicked on a different `<sc-accordion-item>`, the active one will be collapsed and the clicked one will be expanded.

```html
<sc-accordion id="inner-accordion">
  <sc-accordion-item heading="I" active>
    Add <code>active</code> attribute to open an item by default.
  </sc-accordion-item>
  <sc-accordion-item heading="Am">
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Groot">
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>
```

### Multiple

There are times when you need multiple items to be open at the same time. Just add `multiple` attribute to the `<sc-accordion>` element.

```html
<sc-accordion multiple>
  <sc-accordion-item heading="We">
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Are">
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Groot">
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>
```

### Nested

Nested accordions are also possible, the components will figure out which `<sc-accordion>` component is the user interacting with. 

```html
<sc-accordion>
  <sc-accordion-item heading="Accordions can be nested too">
    Lorem ipsum dolor sit

    <sc-accordion id="inner-accordion">
      <sc-accordion-item heading="Nested">
        Lorem ipsum dolor sit
      </sc-accordion-item>

      <sc-accordion-item heading="Accordions">
        Lorem ipsum dolor sit
      </sc-accordion-item>
      <sc-accordion-item heading="Are pretty cool">
        Lorem ipsum dolor sit
      </sc-accordion-item>
    </sc-accordion>

  </sc-accordion-item>
  <sc-accordion-item heading="Yayyy"">
    Lorem ipsum dolor sit
  </sc-accordion-item>
</sc-accordion>
```


### Customise it

There are 2 slots you can use to customise each item. `slot="heading"` and `slot="arrow"`

```html
<sc-accordion>
  <sc-accordion-item>
    <div slot="heading">
      <mark>
        Use <code>slot="heading"</code> to customise heading
      </mark>
    </div>
    Lorem ipsum dolor sit
  </sc-accordion-item>
  <sc-accordion-item heading="Customise arrow">
    <div slot="arrow" style="text-align: center; color: red; width: 60px; height: 60px; font-size: 60px; line-height: 60px">
      &#10084;
    </div>
    Use <code>slot="arrow"</code> to customise arrow
  </sc-accordion-item>
</sc-accordion>
```



## Properties

| Property   | Attribute  | Description                                                  | Type      | Default |
| ---------- | ---------- | ------------------------------------------------------------ | --------- | ------- |
| `multiple` | `multiple` | If multiple `<sc-accordion-item>`s can open at the same time | `boolean` | `false` |


## CSS Custom Properties

| Name                                        | Description                                                                                                                                                                                         |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `--sc-accordion-animation-duration`         | CSS animation duration value. e.g. 1s, 500ms - default: var(--sc-animation-duration, 0.2s)                                                                                                          |
| `--sc-accordion-animation-timing-function`  | CSS animation timing function. - default: var(--sc-animation-timing-function, ease-in-out)                                                                                                          |
| `--sc-accordion-item-body-bg-color`         | Content background colour - default: var(--sc-bg-color, #f1f1f1)                                                                                                                                    |
| `--sc-accordion-item-body-max-height`       | Inner content max height. This values is also used for CSS animation - default: 100vh                                                                                                               |
| `--sc-accordion-item-body-padding-x`        | Horizontal padding for inner content - default: calc(var(--sc-root-spacing, 8px) * 2)                                                                                                               |
| `--sc-accordion-item-body-padding-y`        | Vertical padding for inner content - default: calc(var(--sc-root-spacing, 8px) * 2)                                                                                                                 |
| `--sc-accordion-item-heading-bg-color`      | Heading background colour - default: var(--sc-bg-color, #f1f1f1)                                                                                                                                    |
| `--sc-accordion-item-heading-border-bottom` | Bottom border applied to the heading element to better separate the heading and body, especially useful when content is scrollable. - default: 1px solid var(--sc-shadow-color, rgba(0, 0, 0, 0.2)) |
| `--sc-accordion-item-heading-padding-x`     | Horizontal padding for item heading - default: calc(var(--sc-root-spacing, 8px) * 2)                                                                                                                |
| `--sc-accordion-item-heading-padding-y`     | Vertical padding for item heading - default: calc(var(--sc-root-spacing, 8px) * 2)                                                                                                                  |
| `--sc-accordion-item-heading-text-color`    | Heading text colour - default: var(--sc-text-color, #333333)                                                                                                                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
