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

  previewEl: HTMLElement;

  componentDidRender() {
    if (Build.isBrowser) {
      this.el.querySelectorAll('.hljs').forEach(el => {
        new SimpleBar(el as HTMLElement, { autoHide: false });
      });
      new SimpleBar(this.el.querySelector('.style-list'));
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
    let newStyle = { ...this.tempStyles };
    if (value.length > 0) {
      newStyle[name] = value;
    } else {
      delete newStyle[name];
    }

    this.tempStyles = { ...newStyle };

    this.previewEl.querySelectorAll(this.component.tag).forEach(target => {
      (target as HTMLElement).style.cssText = this.objToCSSRule(this.tempStyles);
    });
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
            <sc-button icon class={`${this.sourceCodeOpen && 'active'}`} title="Toggle source code" onClick={() => this.toggleSourceCode()}>
              <box-icon name="code" color="currentColor"></box-icon>
            </sc-button>
            {styles.length > 0 && (
              <sc-button icon class={`ml-2  ${this.themerOpen && 'active'}`} title="Toggle style sandbox" onClick={() => this.toggleThemer()}>
                <box-icon type="solid" name="brush" color="currentColor"></box-icon>
              </sc-button>
            )}
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

        <div class={`code-block ${this.sourceCodeOpen && 'open'}`}>
          <hl-code language="html" code={code}></hl-code>
        </div>
        <div class="preview mb-2" ref={el => (this.previewEl = el as HTMLElement)} innerHTML={code}></div>

        {styles.length > 0 && (
          <div class={`code-block ${this.themerOpen && 'open'}`}>
            <h4>Styling sandbox</h4>
            <p>Play with the CSS variables here and see the changes applied live.</p>
            <div class="style-container pa-2">
              <div class="style-list">
                {styles.map((style, i) => {
                  const parts = style.docs.split('- default: ');

                  return (
                    <div class="mb-2" key={i}>
                      <label htmlFor={`style-input-${i}`} class="style-text">
                        <linkable-title id={style.name} tag="h5">
                          <code class="title">{style.name}</code>
                        </linkable-title>

                        <div class="description">{parts[0]}</div>
                        <div class="description">
                          <h6>Default</h6>
                          <code>{parts[1]}</code>
                        </div>
                      </label>
                      <sc-input class="style-input" type="text" id={`style-input-${i}`} onChange={e => this.changeStyleValue(style.name, e.target.value)}></sc-input>
                    </div>
                  );
                })}
              </div>
              <div class="style-code">
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
      </div>
    );
  }
}
