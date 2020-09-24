import { Component, Host, h, State } from '@stencil/core';
import Color from 'color';

@Component({
  tag: 'theme-setter',
  styleUrl: 'theme-setter.scss',
})
export class ThemeSetter {
  @State() variables: string = '';

  @State() panelOpen: boolean = false;

  componentDidLoad() {
    this.setColor();
  }

  setColor() {
    const mainColor = Color(this.randomColor());
    const textColor = mainColor.isDark() ? Color('#ffffff') : Color('#333333');
    let lightAlpha = Math.random() * (0.5 - 0.1) + 0.1;
    let darkAlpha = Math.random() * (0.5 - 0.1) + 0.1;

    this.variables = `--sc-bg-color: ${mainColor.hex()};
--sc-text-color: ${textColor.hex()};
--sc-highlight-color: rgba(255, 255, 255, ${lightAlpha.toFixed(2)});
--sc-shadow-color: rgba(0, 0, 0, ${darkAlpha.toFixed(2)});
--sc-secondary-color: ${this.randomColor()};
--sc-active-color: ${this.randomColor()};`;
    document.querySelector('body').style.cssText = this.variables;
  }

  private randomColor() {
    return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }

  render() {
    return (
      <Host class={`panel ${this.panelOpen ? 'in' : ''}`}>
        {this.panelOpen && (
          <sc-button icon onClick={() => this.setColor()}>
            <box-icon name="refresh" color="currentColor"></box-icon>
          </sc-button>
        )}
        <sc-button class="ma-2" icon active={this.panelOpen} title="View current colour theme" onClick={() => (this.panelOpen = !this.panelOpen)}>
          {this.panelOpen ? <box-icon name="x" color="currentColor"></box-icon> : <box-icon name="palette" color="currentColor"></box-icon>}
        </sc-button>
        <div class="panel-content">
          <hl-code language="css" code={this.variables}></hl-code>
        </div>
      </Host>
    );
  }
}
