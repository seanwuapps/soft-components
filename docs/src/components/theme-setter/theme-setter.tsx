import { Component, Host, h, State, Event } from '@stencil/core';
import { EventEmitter } from 'codepen-link/dist/types/stencil-public-runtime';
import Color from 'color';
import store from '../../store';
@Component({
  tag: 'theme-setter',
  styleUrl: 'theme-setter.scss',
})
export class ThemeSetter {
  @State() variables: string = '';

  @State() panelOpen: boolean = false;

  @Event() themeChanged: EventEmitter<boolean>;

  componentWillLoad() {
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

    store.set('themeIsDark', mainColor.isDark());
  }

  private randomColor() {
    return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }

  render() {
    return (
      <Host class={`panel ${this.panelOpen ? 'in' : ''}`}>
        <div class="panel-control">
          {this.panelOpen && (
            <sc-button class="mb-2 mr-2" icon onClick={() => this.setColor()}>
              <box-icon name="refresh" color="currentColor"></box-icon>
            </sc-button>
          )}
          <sc-button class="mb-2" icon active={this.panelOpen} title="View current colour theme" onClick={() => (this.panelOpen = !this.panelOpen)}>
            {this.panelOpen ? <box-icon name="x" color="currentColor"></box-icon> : <box-icon name="palette" color="currentColor"></box-icon>}
          </sc-button>
        </div>
        <div class="panel-content">
          <hl-code language="css" code={this.variables}></hl-code>
        </div>
      </Host>
    );
  }
}
