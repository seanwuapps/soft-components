import React, { Component } from "react";

import * as md from "markdown-it";
import hljs from "highlight.js"; // https://highlightjs.org/
import "highlight.js/styles/dracula.css";
export class Markdown extends Component {
  render() {
    const __html = md({
      html: true,
      linkify: true,
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value;
          } catch (__) {}
        }

        return ""; // use external default escaping
      }
    }).render(this.props.src);
    return <div dangerouslySetInnerHTML={{ __html }}></div>;
  }
}
