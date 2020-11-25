import markdown from 'markdown-it';
import meta from "markdown-it-meta";
import hljs from 'highlight.js';


export const md = markdown({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `</code></pre><hl-code code='${str}' language="${lang}"></hl-code>`;
      } catch (__) {}
    }
    return '<hl-code code="' + escape(str) + '" language="text"></hl-code>';
  },
}).use(meta);

export const mdUsage = markdown({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `</code></pre><code-block hide-tag code='${escape(str)}' escaped></code-block>`;
      } catch (__) {}
    }
    return '<code-block hide-tag code="' + escape(str) + '"></code-block>';
  },
}).use(meta);
