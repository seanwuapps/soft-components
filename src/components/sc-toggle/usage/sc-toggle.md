<div class="intro">
A toggle element is a good way to capture boolean values from user input. The usage follows the traditional input checkbox form element. Adding a <code>size="sm"</code> attribute will give you a compact version of the element.
</div>

Use it like a checkbox
```html
<sc-toggle label="Toggle" name="test1" value="1"></sc-toggle>
```

Add `checked` attribute to set predefined state
```html
<sc-toggle label="Toggle" name="test2" value="2" checked="checked"></sc-toggle>
```

Add a `size="sm"` attribute to make it more compact
```html
<sc-toggle label="Toggle small" name="test3" value="3" size="sm"></sc-toggle>
```