import React, { Component } from "react";
import { SearchField } from "../utils";
import { Menu } from "../layout/menu/menu";

export class Header extends Component {
  state = {
    mobileMenuOpen: false
  };
  showMenu() {
    this.setState({ mobileMenuOpen: true });
  }
  hideMenu() {
    this.setState({ mobileMenuOpen: false });
  }
  render() {
    return (
      <div>
        <div
          className={`d-md-none mobile-menu  ${this.state.mobileMenuOpen &&
            "open"}`}
        >
          <div
            className="mobile-menu-overlay"
            onClick={() => this.hideMenu()}
          ></div>
          <div className="mobile-menu-content">
            <div className="container">
              <div className="row">
                <div className="col">
                  <sc-button icon onClick={() => this.hideMenu()}>
                    <i className="las la-arrow-left"></i>
                  </sc-button>
                </div>
              </div>
              <Menu onItemClick={() => this.hideMenu()} />
            </div>
          </div>
        </div>

        <div className="container" style={{ paddingTop: "20px" }}>
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-between ">
              <sc-button
                bordered
                href="/"
                style={{
                  // "--sc-button-bg-color": "#",
                  "--sc-highlight-color": "lime",
                  "--sc-shadow-color": "lime"
                }}
              >
                <strong>Soft Components</strong>
              </sc-button>
              <div className="d-md-none">
                <sc-button icon title="Menu" onClick={() => this.showMenu()}>
                  <i className="las la-bars"></i>
                </sc-button>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <SearchField />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
