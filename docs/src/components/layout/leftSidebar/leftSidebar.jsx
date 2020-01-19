import React, { Component } from "react";
import { Menu } from "../menu/menu";
export class LeftSidebar extends Component {
  // Render:
  // 1. TOC from md

  render() {
    return (
      <div>
        <Menu />
      </div>
    );
  }
}
