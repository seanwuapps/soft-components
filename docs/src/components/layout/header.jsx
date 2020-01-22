import React, { Component } from "react";
import { SearchField } from "../utils";

export class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <h3>Soft Components</h3>
          </div>
          <div className="col-12 col-md-6 d-xs-none">
            <SearchField />
          </div>
        </div>
      </div>
    );
  }
}
