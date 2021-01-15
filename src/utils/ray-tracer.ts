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

const mouseInEl = (mouseX, mouseY, elX, elY, width, height) => {
  return (
    elX < mouseX &&
    mouseX < elX + width &&
    elY < mouseY &&
    mouseY < elY + height
  )
}

export function handleRayTracing(e: MouseEvent, element: HTMLElement) {
  const { clientX: mouseX, clientY: mouseY } = e
  const { x: elX, y: elY, width, height } = element.getBoundingClientRect()

  // do nothing when mouse is inside the element
  if (mouseInEl(mouseX, mouseY, elX, elY, width, height)) {
    return
  }

  const diffX = mouseX - elX
  const diffY = mouseY - elY

  let propX = bound((maxShadowDistance * diffX) / maxDetectionDistance)
  let propY = bound((maxShadowDistance * diffY) / maxDetectionDistance)

  const step = () => {
    element.style.cssText = `
  --sc-highlight-dist-x: ${propX}px;
  --sc-highlight-dist-y: ${propY}px;
  --sc-shadow-dist-x: ${-propX}px;
  --sc-shadow-dist-y: ${-propY}px;
  `
  }

  requestAnimationFrame(step)
}

const rayTracer = {
  handleRayTracing,
}
export default rayTracer
