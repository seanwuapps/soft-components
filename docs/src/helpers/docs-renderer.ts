import mdit from 'markdown-it';
import hljs from 'highlight.js'; // https://highlightjs.org/

export const renderMarkdown = (src, isComponent) => {
  let md = mdit({
    html: true,
    linkify: true,
    highlight: function (str, lang) {
      if (lang === 'html' && isComponent) {
        try {
          return `<pre></pre>
<component-preview>
    ${str}
</component-preview>
<code-block>
<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>
</code-block>
</sc-tabs>`;
        } catch (__) {}
      }

      if (lang && hljs.getLanguage(lang)) {
        try {
          return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>';
        } catch (__) {}
      }

      return '<pre class="hljs"><code>' + mdit().utils.escapeHtml(str) + '</code></pre>';
    },
  });

  return md.render(src);
};
