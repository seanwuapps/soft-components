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
