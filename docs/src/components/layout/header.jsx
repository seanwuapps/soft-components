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
                href="/"
                class="logo-button"
                // style={{
                //   "--sc-highlight-color": "transparent",
                //   "--sc-shadow-color": "transparent",
                //   "--sc-button-bg-color": "#0275d8",
                //   "--sc-button-text-color": "white",
                //   "--sc-button-text-hover-color": "white"
                // }}
              >
                <svg className="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><switch><g><path d="M19.5 50l15.3 26.5h30.6L80.6 50 65.3 23.6H34.7L19.5 50M29 13.6L7.9 50 29 86.5l2.9-5L13.7 50l18.2-31.5h36.3l2.9-5H29M27.5 89L5 50l22.5-39h45L95 50 72.5 89h-45" fill-rule="evenodd" clip-rule="evenodd"/></g></switch></svg>

                <h2>Soft Components</h2>
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
