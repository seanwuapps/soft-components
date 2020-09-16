import { Component, Prop, h, Element, State, Build } from '@stencil/core';
import hljs from 'highlight.js';
import SimpleBar from 'simplebar';
import 'codepen-link';
import { JsonDocsComponent } from '../../../docs-data';
@Component({
  tag: 'code-block',
  styleUrls: ['code-block.scss'],
})
export class CodeBlock {
  @Element() el: HTMLElement;
  @Prop() code: string;
  @Prop() component: JsonDocsComponent;

  @State() sourceCodeOpen: boolean = false;
  @State() themerOpen: boolean = false;

  @State() styleEl: HTMLElement;

  @State() tempStyles: any = {};

  componentDidRender() {
    if (Build.isBrowser) {
      this.el.querySelectorAll('.hljs').forEach(el => {
        new SimpleBar(el as HTMLElement, { autoHide: false });
      });
    }
  }

  toggleSourceCode() {
    this.sourceCodeOpen = !this.sourceCodeOpen;
  }

  toggleThemer() {
    this.themerOpen = !this.themerOpen;
  }

  objToCSSRule(obj) {
    let style = '';
    for (const [key, value] of Object.entries(obj)) {
      style += `${key}: ${value};\n`;
    }
    return style;
  }

  changeStyleValue(name, value) {
    let newStyle = {};
    newStyle[name] = value;

    this.tempStyles = { ...this.tempStyles, ...newStyle };
    this.styleEl.innerHTML = `code-block .preview ${this.component.tag} {${this.objToCSSRule(this.tempStyles)}}`;
  }

  render() {
    const { tag, styles } = this.component;
    return (
      <div class="raised-2 round pa-2">
        <div class="control-bar flex align-center justify-between">
          <h5>
            <code>&lt;{tag}&gt;</code>
          </h5>

          <div class="buttons">
            <sc-button icon class={` ${this.themerOpen && 'active'}`} title="Toggle style sandbox" onClick={() => this.toggleThemer()}>
              <box-icon type="solid" name="brush" color="currentColor"></box-icon>
            </sc-button>
            <sc-button icon class={`ml-2 ${this.sourceCodeOpen && 'active'}`} title="Toggle source code" onClick={() => this.toggleSourceCode()}>
              <box-icon name="code" color="currentColor"></box-icon>
            </sc-button>
            <sc-button icon class="ml-2" title="View in GitHub" target="_blank" href={`https://github.com/seanwuapps/soft-components/blob/master/src/components/${tag}/`}>
              <box-icon name="github" type="logo" color="currentColor"></box-icon>
            </sc-button>
            <codepen-link
              html={this.code}
              title="Try it in CodePen"
              pen-title={`${tag} demo - Soft Components`}
              editors="111"
              css-preprocessor="scss"
              css="body{ font-family: 'Open Sans', sans-serif; }"
              css-external="//maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css;//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700;//unpkg.com/soft-components@latest/dist/soft-components/soft-components.css"
              js-external="//unpkg.com/soft-components@latest/dist/soft-components/soft-components.js"
            >
              <sc-button icon class="ml-2">
                <box-icon type="logo" name="codepen" color="currentColor"></box-icon>
              </sc-button>
            </codepen-link>
          </div>
        </div>
        <style ref={el => (this.styleEl = el as HTMLElement)}></style>
        <div class="preview" innerHTML={this.code}></div>
        <div class={`code-block ${this.themerOpen && 'open'}`}>
          <h4>CSS Variables</h4>
          <div class="flex">
            <div class="w-6">
              {styles.map((style, i) => {
                return (
                  <div class="flex align-center" key={i}>
                    <div class="w-5 pr-2 text-right">{style.name}</div>
                    <div class="w-5">
                      <sc-input type="text" onChange={e => this.changeStyleValue(style.name, e.target.value)}></sc-input>
                    </div>
                  </div>
                );
              })}
            </div>
            <div class="w-4">
              <pre class="hljs">
                <code
                  innerHTML={
                    hljs.highlight(
                      'css',
                      `sc-button {
${this.objToCSSRule(this.tempStyles)}
}`,
                      true,
                    ).value
                  }
                ></code>
              </pre>
            </div>
          </div>
        </div>
        <div class={`code-block ${this.sourceCodeOpen && 'open'}`}>
          <pre class="hljs">
            <code innerHTML={hljs.highlight('html', this.code, true).value}></code>
          </pre>
        </div>
      </div>
    );
  }
}
