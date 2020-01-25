import * as mdit from "markdown-it";
import hljs from "highlight.js"; // https://highlightjs.org/

export const renderMarkdown = (src, isComponent) => {
  let md = mdit({
    html: true,
    linkify: true,
    highlight: function(str, lang) {
      if (lang === "html" && isComponent) {
        try {
          return `<pre></pre>
          <sc-tabs>
          <div class="row">
            <div class="col">
              <sc-tab-button block class="text-center" target="preview">
              <i class="las la-eye"></i>
              Preview
              </sc-tab-button>
            </div>
            <div class="col">
              <sc-tab-button block class="text-center" target="code">
              <i class="las la-code"></i>
              Code</sc-tab-button>
            </div>
          </div>
<sc-tab-content id="preview">
  <sc-card>
    ${str}
  </sc-card>
</sc-tab-content>
<sc-tab-content id="code">
<pre class="hljs"><code>${hljs.highlight(lang, str, true).value}</code></pre>
</sc-tab-content>
</sc-tabs>`;
        } catch (__) {}
      }

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
        mdit().utils.escapeHtml(str) +
        "</code></pre>"
      );
    }
  });

  return md.render(src);
};
