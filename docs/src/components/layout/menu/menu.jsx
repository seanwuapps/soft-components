import React, { Component } from "react";
import { Markdown } from "../../utils";
import { withRouter } from "react-router-dom";
import "./menu.scss";

class MenuContent extends Component {
  state = { content: "" };
  componentDidMount() {
    fetch("/md/toc.md")
      .then(res => res.text())
      .then(content => {
        this.setState({ content });
      });
  }
  render() {
    return (
      <div className="menu">
        <Markdown src={this.state.content} />
      </div>
    );
  }
}

export const Menu = withRouter(MenuContent);
