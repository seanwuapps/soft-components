import React, { Component } from "react";

import * as md from "markdown-it";
import hljs from "highlight.js"; // https://highlightjs.org/
import "highlight.js/styles/dracula.css";
export class Markdown extends Component {
  render() {
    const __html = md({
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return (
              '<pre class="hljs"><code>' +
              hljs.highlight(lang, str, true).value +
              "</code></pre>"
            );
          } catch (__) {}
        }

        return (
          '<pre class="hljs"><code>' +
          md.utils.escapeHtml(str) +
          "</code></pre>"
        );
      }
    }).render(this.props.src);
    return <div dangerouslySetInnerHTML={{ __html }}></div>;
  }
}
