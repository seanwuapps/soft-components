# Spacing

Spacing can be controlled by the global CSS variable called `--sc-root-spacing` which defaults to `8px`

Paddings and margins can be applied with a set of classes similar to (but not the same as) Bootstrap's spacing utilities. 

The classes are named using the format `{property}{sides}-{size}`, where:
 - `{property}` can be either `p` for padding or `m` for margin
 - `{sides}` can be

<center>

| Name | Meaning    |
|------|------------|
| `t` | Top        |
| `r` | Right      |
| `b` | Bottom     |
| `l` | Left       |
| `x` | Horizontal |
| `y` | Vertical   |
| `a` | All        |

</center>

 - `{size}` can be an integer between `0` to `10`


For example

```html
<div class="ml-4"></div>
```

will apply this CSS rule

```css
.ml-4 {
  margin-left: calc( var(--sc-root-spacing) * 4 );
}
```
