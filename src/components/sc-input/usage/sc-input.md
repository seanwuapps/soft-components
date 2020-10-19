<div class="intro">
Generic input component.
</div>

### *Note* 
In order to use the `sc-input` element in your normal `form` element for correct form values and validations, this component does not use shadow dom, meaning the styles can be affected by the global css stylesheets.

### Utilises the browser's built-in validations
This component passes the `type` attribute to the native `<input>` element used under the hood. So you can use types such as `email`, `number`, `tel`, `url` `password` for their supported browser validation behaviours.


### Alternative components for certain types

There are input types that has dedicated components for them. Here's a list of input types and the component we recommend you use. 

- Buttons: (`type="button"` | `type="submit"` | `type="reset"`) use `sc-button`
- Checkbox: (`type="checkbox"`) use `sc-toggle` (or `sc-switch` in future)
- File: coming soon 
- Radio: coming soon 
- Color: coming soon 
- Range: coming soon
- 


```html
<form method="post" action="/">
  <label for="email">Email</label>
  <sc-input type="email" required name="email" id="email"></sc-input>

  <hr />
  
  <label for="password">Password</label>
  <sc-input type="password" required name="password" maxlength="6" id="password">
  </sc-input>
  
  <hr />

  <sc-button type="submit">
   Submit
  </sc-button>
</form>
```

<div class="mb-5">
  checkbox
  <sc-input type="checkbox">
  </sc-input>
  <input type="checkbox">
  </input>
</div>
<div class="mb-5">
  color
  <sc-input type="color">
  </sc-input>
</div>
<div class="mb-5">
  date
  <sc-input type="date">
  </sc-input>
</div>
<div class="mb-5">
  datetime
  <sc-input type="datetime-local">
  </sc-input>
</div>
<div class="mb-5">
  email
  <sc-input type="email">
  </sc-input>
</div>
<div class="mb-5">
  file
  <sc-input type="file">
  </sc-input>
</div>
<div class="mb-5">
  month
  <sc-input type="month">
  </sc-input>
</div>
<div class="mb-5">
  number
  <sc-input type="number">
  </sc-input>
</div>
<div class="mb-5">
  password
  <sc-input type="password">
  </sc-input>
</div>
<div class="mb-5">
  radio
  <sc-input type="radio">
  </sc-input>
</div>
<div class="mb-5">
  range
  <sc-input type="range">
  </sc-input>
</div>
<div class="mb-5">
  reset
  <sc-input type="reset">
  </sc-input>
</div>
<div class="mb-5">
  search
  <sc-input type="search">
  </sc-input>
</div>
<div class="mb-5">
  submit
  <sc-input type="submit">
  </sc-input>
</div>
<div class="mb-5">
  tel
  <sc-input type="tel">
  </sc-input>
</div>
<div class="mb-5">
  text
  <sc-input type="text">
  </sc-input>
</div>
<sc-input type="time">
</sc-input>
<sc-input type="url">
</sc-input>
<sc-input type="week">
</sc-input>