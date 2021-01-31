import { Component, Prop } from '@stencil/core'
import { handleRayTracing } from '../../utils/ray-tracer'
@Component({
  tag: 'sc-ray-tracer',
  shadow: true,
})
export class ScRayTracer {
  @Prop() element: HTMLElement

  handleEvent(e) {
    handleRayTracing(e, this.element)
  }

  componentDidLoad() {
    this.element.classList.add('ray-tracing')
    window.addEventListener('mousemove', this.handleEvent.bind(this))
  }

  disconnectedCallback() {
    window.removeEventListener('mousemove', this.handleEvent.bind(this))
  }
}
