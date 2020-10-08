# Styling

## `.raised`  `.engraved`

The CSS file contains helper classes that provide you with the signature neumorphism look. you can just apply a `.raised` class to any element and have it look like what the class name suggests. 
You can control the level of the effects by adding `-0` to `-9` at the end of `.raised` class where `.raised-0` is flat nad `.raised-9` is maximum effect.


```html
<div class="flex ma-4">
  <div class="w-4">
    <div class="px-2 py-4 round raised">
      <span>.raised</span>
    </div>
    <div class="px-2 py-4 round raised-0">
      <span>.raised-0</span>
    </div>
    <div class="px-2 py-4 round raised-1">
      <span>.raised-1</span>
    </div>
    <div class="px-2 py-4 round raised-2">
      <span>.raised-2</span>
    </div>
    <div class="px-2 py-4 round raised-3">
      <span>.raised-3</span>
    </div>
    <div class="px-2 py-4 round raised-4">
      <span>.raised-4</span>
    </div>
    <div class="px-2 py-4 round raised-5">
      <span>.raised-5</span>
    </div>
    <div class="px-2 py-4 round raised-6">
      <span>.raised-6</span>
    </div>
    <div class="px-2 py-4 round raised-7">
      <span>.raised-7</span>
    </div>
    <div class="px-2 py-4 round raised-8">
      <span>.raised-8</span>
    </div>
    <div class="px-2 py-4 round raised-9">
      <span>.raised-9</span>
    </div>
  </div>
  <div class="w-1"></div>
  <div class="w-4">
    <div class="px-2 py-4 round engraved">
      <span>.engraved</span>
    </div>
    <div class="px-2 py-4 round engraved-0">
      <span>.engraved-0</span>
    </div>
    <div class="px-2 py-4 round engraved-1">
      <span>.engraved-1</span>
    </div>
    <div class="px-2 py-4 round engraved-2">
      <span>.engraved-2</span>
    </div>
    <div class="px-2 py-4 round engraved-3">
      <span>.engraved-3</span>
    </div>
    <div class="px-2 py-4 round engraved-4">
      <span>.engraved-4</span>
    </div>
    <div class="px-2 py-4 round engraved-5">
      <span>.engraved-5</span>
    </div>
    <div class="px-2 py-4 round engraved-6">
      <span>.engraved-6</span>
    </div>
    <div class="px-2 py-4 round engraved-7">
      <span>.engraved-7</span>
    </div>
    <div class="px-2 py-4 round engraved-8">
      <span>.engraved-8</span>
    </div>
    <div class="px-2 py-4 round engraved-9">
      <span>.engraved-9</span>
    </div>
  </div>
</div>
```

## `.round`

A lot of times having rounded corners helps the neumorphism design, making it feel softer and more friendly. The `.round` class can help with this effect, by default it applies `1em` border radius to all corners, you can adjust the radius by changing the `--sc-border-radius` css variable.

```css
:root {
  --sc-border-radius: 30px; /* applies 30px border-radius */
}
``` 

I didn't bother adding the corner-specific classes such as `.round-top-left`, please let me know if you need it by creating a [GitHub issue](https://github.com/seanwuapps/soft-components/issues/new)
