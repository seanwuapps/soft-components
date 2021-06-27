import Color from 'color'

export type FrostedLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | null

export const convertToGlassStyles = (el: HTMLElement, level?: FrostedLevel) => {
  const bg = window.getComputedStyle(el).getPropertyValue('background-color')
  if (bg.startsWith('rgba')) {
    return
  }
  const alpha = 0.3
  const glassBg = Color(bg).alpha(alpha).toString()
  if (level) {
    el.style.setProperty('backdrop-filter', `blur(${6 * level}px)`)
  }
  el.style.setProperty('background-color', glassBg)
}
