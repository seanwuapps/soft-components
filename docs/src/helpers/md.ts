import markdown from 'markdown-it';
import hljs from 'highlight.js';
const md = markdown({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `</code></pre><hl-code code='${str}' language="${lang}"></hl-code>`;
      } catch (__) {}
    }
    return '<hl-code code="' + markdown.utils.escapeHtml(str) + '"></hl-code>';
  },
});
export default md;
