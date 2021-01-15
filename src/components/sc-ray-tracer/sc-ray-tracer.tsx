import { Component, Prop } from '@stencil/core'
import { handleRayTracing } from '../../utils/ray-tracer'
import debounce from 'lodash.debounce'
@Component({
  tag: 'sc-ray-tracer',
  shadow: true,
})
export class ScRayTracer {
  @Prop() element: HTMLElement

  componentDidLoad() {
    this.element.classList.add('ray-tracing')
    window.addEventListener(
      'mousemove',
      debounce(e => handleRayTracing(e, this.element), 10)
    )
  }

  disconnectedCallback() {
    window.removeEventListener('mousemove', debounce(handleRayTracing, 10))
  }
}
