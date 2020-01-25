import React, { Component } from "react";

export class Footer extends Component {
  state = {};
  // render:
  // 1. Author link
  // 2. "work with me" link
  // 3.
  render() {
    return (
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col" style={{ textAlign: "center" }}>
              <sc-button
                href="https://twitter.com/seanwuapps"
                icon
                target="_blank"
              >
                <i className="lab la-twitter"></i>
              </sc-button>
              <sc-button
                href="https://github.com/seanwuapps/soft-components"
                icon
                target="_blank"
              >
                <i className="lab la-github"></i>
              </sc-button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
