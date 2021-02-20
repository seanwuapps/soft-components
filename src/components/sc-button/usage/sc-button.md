<div class="intro">
A button is the most identifiable component for neumorphism designs. You can customise the use of a button in various ways. 
</div>

```html
<sc-button aria-label="Default button" onclick="alert('yo')">Button</sc-button>
```

You can use it the same way as an `<a>` tag.

```html
<!-- Anchor -->
<sc-button aria-label="Anchor tag" href="/" target="_blank" rel="noreferrer" title="button">
Anchor
</sc-button>
```

Add a `block` attribute to create a block level button.

```html
<!-- Block level -->
<sc-button aria-label="Block level button" block>Block Button</sc-button>
```

Use `icon` attribute to adjust styles to fit an icon into the button.

```html
<sc-button aria-label="Icon button" icon>
  <i class='bx bx-drink'></i>
</sc-button>
```

Use `icon-text` attribute to center align icon and text.

```html
<sc-button aria-label="Icon and text button" icon-text>
  <i class='bx bx-drink'></i>
  Text
</sc-button>

<sc-button aria-label="Icon and text button" icon-text>
  Text
  <i class='bx bx-drink'></i>
</sc-button>
```
Use `bordered` attribute to add a reflective border

```html
<sc-button aria-label="Icon button with a reflective border" bordered icon>
  <i class='bx bx-drink'></i>
</sc-button>
```

Use `circle` attribute to create a circle shaped button

```html
<sc-button aria-label="Circled button with image" circle>
  <img src="https://github.com/seanwuapps.png" alt="avatar" width="100%">
</sc-button>
```

Use `flat` attribute to make button blend in with the surface (not a11y friendly)

```html
<sc-button aria-label="Flat button" flat>
  Flat button
</sc-button>
```

Use `disabled` attribute to disable the button like you're used to.

```html
<sc-button aria-label="Disabled button" disabled>
  Disabled button
</sc-button>
```


Combine attributes together to have a party

```html

<h6>Circle icon</h6>
<sc-button aria-label="Circle icon" icon circle>
  <i class='bx bx-drink'></i>
</sc-button>

<h6>Circle bordered</h6>
<sc-button aria-label="Circle bordered" circle bordered>
  <img src="https://github.com/seanwuapps.png" alt="avatar" width="100%">
</sc-button>
```

You can add `ray-tracing` attribute to make it use the mouse as the light source, this could be used to draw more attention to the element.
```html
<sc-button ray-tracing>
  Look at me!
</sc-button>
```

