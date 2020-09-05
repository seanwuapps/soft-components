import markdown from 'markdown-it';
import hljs from 'highlight.js';
const md = markdown({
  html: true,
  linkify: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + markdown.utils.escapeHtml(str) + '</code></pre>';
  },
});
export default md;
