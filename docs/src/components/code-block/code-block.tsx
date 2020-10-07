import { Component, Prop, h, Element, State, Build } from '@stencil/core';
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
  @Prop() component?: JsonDocsComponent = null;
  @Prop() hideTag?: boolean = false;
  @Prop() escaped?: boolean = false;

  @State() sourceCodeOpen: boolean = false;
  @State() themerOpen: boolean = false;

  @State() tempStyles: any = {};

  styleEl: HTMLElement;

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
    if (!this.component) {
      return <div>Loading...</div>;
    }
    const { tag, styles } = this.component;
    let { code } = this;
    if (this.escaped) {
      code = unescape(code);
    }
    return (
      <div class="raised-2 round pa-2">
        <div class="control-bar flex align-center justify-between">
          {this.hideTag ? (
            <div>&nbsp;</div>
          ) : (
            <h5 class="mb-2">
              <code>&lt;{tag}&gt;</code>
            </h5>
          )}

          <div class="buttons mb-2">
            {styles.length > 0 && (
              <sc-button icon class={` ${this.themerOpen && 'active'}`} title="Toggle style sandbox" onClick={() => this.toggleThemer()}>
                <box-icon type="solid" name="brush" color="currentColor"></box-icon>
              </sc-button>
            )}
            <sc-button icon class={`ml-2 ${this.sourceCodeOpen && 'active'}`} title="Toggle source code" onClick={() => this.toggleSourceCode()}>
              <box-icon name="code" color="currentColor"></box-icon>
            </sc-button>
            <sc-button
              icon
              class="ml-2"
              title="View in GitHub"
              target="_blank"
              href={`https://github.com/seanwuapps/soft-components/edit/master/src/components/${tag}/usage/${tag}.md`}
            >
              <box-icon name="github" type="logo" color="currentColor"></box-icon>
            </sc-button>
            <codepen-link
              html={code}
              title="Try it in CodePen"
              pen-title={`${tag} demo - Soft Components`}
              editors="111"
              css-preprocessor="scss"
              css="body{ font-family: 'Open Sans', sans-serif; }"
              css-external="//unpkg.com/boxicons@2.0.5/css/boxicons.min.css;//fonts.googleapis.com/css?family=Open+Sans:300,400,600,700;//unpkg.com/soft-components@latest/dist/soft-components/soft-components.css"
              js-external="//unpkg.com/soft-components@latest/dist/soft-components/soft-components.js"
            >
              <sc-button icon class="ml-2">
                <box-icon type="logo" name="codepen" color="currentColor"></box-icon>
              </sc-button>
            </codepen-link>
          </div>
        </div>

        {styles.length > 0 && (
          <div class={`code-block ${this.themerOpen && 'open'}`}>
            <h4>CSS Variables</h4>
            <div class="flex justify-between pt-2">
              <div class="w-5 pr-2">
                {styles.map((style, i) => {
                  return (
                    <div class="flex mb-2" key={i}>
                      <label htmlFor={`style-input-${i}`} class="style-text w-5 pr-2 text-right">
                        <code class="title">{style.name}</code>
                        <div class="description">{style.docs}</div>
                      </label>
                      <sc-input class="w-5" type="text" id={`style-input-${i}`} onChange={e => this.changeStyleValue(style.name, e.target.value)}></sc-input>
                    </div>
                  );
                })}
              </div>
              <div class="w-4">
                <hl-code
                  language="css"
                  code={`${tag} {
  ${this.objToCSSRule(this.tempStyles)}
}`}
                ></hl-code>
              </div>
            </div>
          </div>
        )}

        <div class={`code-block ${this.sourceCodeOpen && 'open'}`}>
          <hl-code language="html" code={code}></hl-code>
        </div>
        <style ref={el => (this.styleEl = el as HTMLElement)}></style>
        <div class="preview" innerHTML={code}></div>
      </div>
    );
  }
}
