import React, { Component } from "react";
export class Header extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-6">
            <h1>Soft Components</h1>
          </div>
          <div className="col-xs-6">Search</div>
        </div>
      </div>
    );
  }
}
