<div class="intro">
Generic input component. 
</div>

This component passes the `type` attribute to the native `<input>` element used under the hood. So you can use types such as `email`, `number`, `tel`, `url` `password` for their supported browser validation behaviours.

There are input types that has dedicated components for them. Here's a list of input types and the component we recommend you use. 

- Buttons: (`type="button"` | `type="submit"` | `type="reset"`) use `sc-button`
- Checkbox: (`type="checkbox"`) use `sc-toggle` (`sc-switch` in future)

```html
<label for="email">Email</label>
<sc-input type="email" required name="email" id="email"></sc-input>
```

```html
<label for="password">Password</label>
<sc-input type="password" required name="password" maxlength="6" id="password">
</sc-input>
```

```html
<label for=""></label>
<sc-input type="" required name="" maxlength="6" id="">
</sc-input>
```

