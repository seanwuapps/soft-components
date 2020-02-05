# Login form

This example shows how to create a simple form using `sc-input` and `sc-toggle`.

`sc-input` elements work like `<input>` elements inside `<form>` tag. 

```html
<style>
  sc-input, sc-toggle{
    display: block;
    margin-bottom: 40px;
  }
  .orange-btn{
    --sc-button-bg-color: #0F4C81;
    --sc-button-text-color: white;
    --sc-button-text-hover-color: #ccc;
  }
</style>
  <form action="/" method="get">
    <sc-card card-title="Login" card-subtitle="Welcome back, please fill all fields and click login button.">
      <div class="row">
        <label class="col-12" for="email">Email</label>
        <sc-input class="col-12" required name="email" id="email" type="email"></sc-input>

        <label class="col-12" for="password">Password</label>
        <sc-input class="col-12" required name="password" maxlength="6" value="secure-password" id="password"
          type="password">
        </sc-input>
      </div>

      <div class="row">
        <div class="col-12">
          <sc-toggle name="remember" value="1" checked="checked" label="Remember me"></sc-toggle>
        </div>
      </div>
      <sc-button class="orange-btn" block type="submit">Login</sc-button>
    </sc-card>
  </form>
  ```