import { Component, Host, h } from '@stencil/core';
import Color from 'color';

@Component({
  tag: 'theme-setter',
})
export class ThemeSetter {
  componentDidLoad() {
    const mainColor = Color(this.randomColor());
    const textColor = mainColor.isDark() ? Color('#ffffff') : Color('#333333');
    let lightAlpha = Math.random() * (0.5 - 0.1) + 0.1;
    let darkAlpha = Math.random() * (0.5 - 0.1) + 0.1;

    document.querySelector('body').style.cssText = `
  --sc-bg-color: ${mainColor.rgb().string()};
  --sc-text-color: ${textColor.rgb().string()};
  --sc-highlight-color: rgba(255, 255, 255, ${lightAlpha});
  --sc-shadow-color: rgba(0, 0, 0, ${darkAlpha});
  --sc-secondary-color: ${this.randomColor()};
  --sc-active-color: ${this.randomColor()};
`;
  }

  private randomColor() {
    return '#' + (0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6);
  }
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
