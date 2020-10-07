<div class="intro">
A button is the most identifiable component for neumorphism designs. You can customise the use of a button in various ways. 
</div>

```html
<sc-button onclick="alert('yo')">Button</sc-button>
```

You can use it the same way as an `<a>` tag.

```html
<!-- Anchor -->
<sc-button href="/" target="_blank" rel="noreferrer" title="button">
Anchor
</sc-button>
```

Add a `block` attribute to create a block level button.

```html
<!-- Block level -->
<sc-button block>Block Button</sc-button>
```

Use `icon` attribute to adjust styles to fit an icon into the button.

```html
<sc-button icon>
  <i class='bx bx-drink'></i>
</sc-button>
```

Use `icon-text` attribute to center align icon and text.

```html
<sc-button icon-text>
  <i class='bx bx-drink'></i>
  Text
</sc-button>

<sc-button icon-text>
  Text
  <i class='bx bx-drink'></i>
</sc-button>
```
Use `bordered` attribute to add a reflective border

```html
<sc-button bordered icon>
  <i class='bx bx-drink'></i>
</sc-button>
```

Use `circle` attribute to create a circle shaped button

```html
<sc-button circle>
  <img src="https://github.com/seanwuapps.png" alt="avatar" width="100%">
</sc-button>
```

Use `flat` attribute to make button blend in with the surface (not a11y friendly)

```html
<sc-button flat>
  Flat button
</sc-button>
```


Combine attributes together to have a party

```html

Circle icon
<sc-button icon circle>
  <i class='bx bx-drink'></i>
</sc-button>


Circle bordered
<sc-button circle bordered>
  <img src="https://github.com/seanwuapps.png" alt="avatar" width="100%">
</sc-button>
```



