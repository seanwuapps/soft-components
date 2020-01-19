import React from "react";
import ReactDOM from "react-dom";
import "soft-components/dist/soft-components/soft-components.css";
import "flexboxgrid/dist/flexboxgrid.min.css";
import "./scss/app.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { applyPolyfills, defineCustomElements } from "soft-components/loader";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

applyPolyfills().then(() => {
  defineCustomElements(window);
});
