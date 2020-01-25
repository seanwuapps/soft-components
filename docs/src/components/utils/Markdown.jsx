import React, { Component } from "react";
import "highlight.js/styles/dracula.css";
import { renderMarkdown } from "./md";
export class Markdown extends Component {
  render() {
    const __html = renderMarkdown(this.props.src, this.props.isComponent);
    return <div dangerouslySetInnerHTML={{ __html }}></div>;
  }
}
