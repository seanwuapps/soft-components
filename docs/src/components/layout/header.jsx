import React, { Component } from "react";
import { SearchField } from "../utils";

export class Header extends Component {
  render() {
    return (
      <div className="container" style={{ paddingTop: "20px" }}>
        <div className="row">
          <div className="col-12 col-md-6">
            <sc-button bordered href="/">
              <strong>Soft Components</strong>
            </sc-button>
          </div>
          <div className="col-12 col-md-6 d-xs-none">
            <SearchField />
          </div>
        </div>
      </div>
    );
  }
}
