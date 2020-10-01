export const hasSlot: (HTMLElement, string?) => boolean = (
  parentEl: HTMLElement,
  slotName?: string
) => {
  return !!parentEl.querySelector('[slot="' + slotName + '"') // cast boolean
}
