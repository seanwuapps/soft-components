import { Component, Method, Prop, Watch } from '@stencil/core'
import { handleRayTracing } from '../../utils/ray-tracer'
@Component({
  tag: 'sc-ray-tracer',
  shadow: true,
})
export class ScRayTracer {
  @Prop({ mutable: true }) element: HTMLElement = null

  handleEvent(e) {
    handleRayTracing(e, this.element)
  }

  @Watch('element')
  initiate() {
    if (this.element) {
      this.element.classList.add('ray-tracing')
      window.addEventListener('mousemove', this.handleEvent.bind(this))
    }
    console.log('initiated')
  }

  @Method()
  async setElement(target: HTMLElement) {
    this.element = target
  }

  componentWillLoad() {
    this.initiate()
  }

  disconnectedCallback() {
    window.removeEventListener('mousemove', this.handleEvent.bind(this))
  }
}
