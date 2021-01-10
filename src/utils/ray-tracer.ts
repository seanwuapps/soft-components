let maxShadowDistance = 15
let maxDetectionDistance = 100

const bound = num => {
  if (num > maxShadowDistance) {
    return maxShadowDistance
  }
  if (num < -maxShadowDistance) {
    return -maxShadowDistance
  }

  return num
}

export function handleRayTracing(e: MouseEvent, element: HTMLElement) {
  const { clientX: mouseX, clientY: mouseY } = e
  const { x: elX, y: elY } = element.getBoundingClientRect()

  const diffX = mouseX - elX
  const diffY = mouseY - elY

  let propX = bound((maxShadowDistance * diffX) / maxDetectionDistance)
  let propY = bound((maxShadowDistance * diffY) / maxDetectionDistance)

  element.style.cssText = `
  --sc-highlight-dist-x: ${propX}px;
  --sc-highlight-dist-y: ${propY}px;
  --sc-shadow-dist-x: ${-propX}px;
  --sc-shadow-dist-y: ${-propY}px;
  `

  console.log({ elX, elY })
  console.log({ mouseX, mouseY })
}

const rayTracer = {
  handleRayTracing,
}
export default rayTracer
