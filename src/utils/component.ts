export const hasSlot: (HTMLElement, string?) => boolean = (
  parentEl: HTMLElement,
  slotName?: string
) => {
  return !!parentEl.querySelector(':scope > [slot="' + slotName + '"') // cast boolean
}
