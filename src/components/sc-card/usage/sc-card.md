<div class="intro">
  A card contains a set of relevant content on a single topic.
</div>

## Text based cards

Card's content can be added into the card via the default slot. `card-title` and `card-subtitle` properties are available to add styled card heading.

Add `engraved` to make the card appear to be sunk into the surface.

Add `bordered` to give the card a border that's reflective to the light source.

```html
<sc-card class="ma-4" card-title="Card" card-subtitle="I'm normal card">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque natus autem veritatis architecto facilis
</sc-card>
<sc-card class="ma-4" engraved card-title="Card" card-subtitle="I'm engraved card">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas dolorem voluptatibus facilis
</sc-card>
<sc-card class="ma-4" bordered card-title="Card" card-subtitle="I'm bordered card">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae velit maiores illum
</sc-card>
```

<h2>Media cards</h2>

`slot="media-content"` can be used inside the card element to show featured media.

```html
<sc-card class="ma-4" card-title="Top media" card-subtitle="5 Feb 2020" media-position="top">
  <img slot="media-content" src="https://res.cloudinary.com/seanwuapps/image/upload/c_scale,w_800/v1603083086/coffee_ud1ucg.jpg" alt="photo">
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum veniam natus sapiente porro
  </div>
</sc-card>
<sc-card class="ma-4" card-title="Bottom media" card-subtitle="5 Feb 2020" media-position="bottom">
  <img slot="media-content" src="https://res.cloudinary.com/seanwuapps/image/upload/c_scale,w_800/v1603083086/coffee_ud1ucg.jpg" alt="photo">
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum veniam natus sapiente porro
  </div>
</sc-card>
<sc-card class="ma-4" card-title="Left media" card-subtitle="5 Feb 2020" media-position="left">
  <img slot="media-content" src="https://res.cloudinary.com/seanwuapps/image/upload/c_scale,w_800/v1603083086/coffee_ud1ucg.jpg" alt="photo">
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum veniam natus sapiente porro
  </div>
</sc-card>
<sc-card class="ma-4" card-title="Right media" card-subtitle="5 Feb 2020" media-position="right">
  <img slot="media-content" src="https://res.cloudinary.com/seanwuapps/image/upload/c_scale,w_800/v1603083086/coffee_ud1ucg.jpg" alt="photo">
  <div>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum veniam natus sapiente porro
  </div>
</sc-card>
```


## Customise card title

Card heading section can be customised with the `custom-title` slot. 

```html
<sc-card class="ma-4">
  <div slot="custom-title">
    <div>
      <mark>Customise title with <code>slot="custom-title"</code></mark>
    </div>
    <div>
      <marquee>Go bananas inside the slot <img
          src="https://ph-files.imgix.net/caf5608a-67ec-4f9f-acb5-db0052c33bed?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80"
          alt="party parrot" width="20"></marquee>
    </div>
  </div>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat, modi animi possimus fugiat accusamus vitae tempore suscipit asperiores eum cum nihil amet natus impedit iure
</sc-card>
```


## Ray tracing

You can add `ray-tracing` attribute to make it use the mouse as the light source, this could be used to draw more attention to the element.

Please note the ray-tracing feature modifies the CSS variables that's shared between components, if you have other components inside the cards that uses the highlight and shadow variables they will use the mouse as light source too. 

```html
<sc-card ray-tracing class="ma-4" card-title="Card" card-subtitle="I'm normal card">
  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque natus autem veritatis architecto facilis
</sc-card>
<sc-card ray-tracing class="ma-4" engraved card-title="Card" card-subtitle="I'm engraved card">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quas dolorem voluptatibus facilis
</sc-card>
<sc-card ray-tracing class="ma-4" bordered card-title="Card" card-subtitle="I'm bordered card">
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum beatae velit maiores illum
</sc-card>
```
