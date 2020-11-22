import { Component, Host, h, Prop } from '@stencil/core'

@Component({
  tag: 'sc-progress',
  styleUrl: 'sc-progress.scss',
  shadow: true,
})
export class ScProgress {
  /**
   * Percentage of progress bar
   */
  @Prop() percentage?: number = null

  /**
   * Use indeterminate mode for the progress bar when you do not know how long an operation will take.
   */
  @Prop() indeterminate: boolean = false

  /**
   * Set shape of the progress indicator to be circular
   */
  @Prop() circular?: boolean = false

  /**
   * Size for circular progress in pixels
   */
  @Prop() size?: number = 100

  circleEl = null

  spinnerAnimationId = null

  startIndeterminateAnimation() {
    let upper = 1000
    let lower = 0
    let dashoffset = upper

    let goingDown = true
    let speed = 1 //
    const frame = () => {
      if (dashoffset < lower) {
        goingDown = false
      }

      if (dashoffset > upper) {
        goingDown = true
      }
      if (goingDown) {
        dashoffset -= speed
      } else {
        dashoffset += speed
      }

      console.log(dashoffset)
      this.circleEl.style.cssText = 'stroke-dashoffset: ' + dashoffset
      // requestAnimationFrame(frame)
    }
    this.spinnerAnimationId = requestAnimationFrame(frame)
  }

  disconnectedCallback() {
    if (this.spinnerAnimationId) {
      cancelAnimationFrame(this.spinnerAnimationId)
    }
  }

  renderCircular(size) {
    // commented codes are attempts to do gapped circular progress bar.
    // const gapPercent = 0
    // const offsetFactor = (100 - gapPercent) / 100
    // const max = offsetFactor * (size * Math.PI) // c
    /**
     * -270: rotate starting point to bottom center
     */
    // const rotate = -270 + (360 * gapPercent) / 100 / 2

    if (this.indeterminate) {
      // this.startIndeterminateAnimation()
    }

    const max = size * Math.PI
    const offset = (1 - this.percentage / 100) * max
    const strokeWidth = size / 10

    return (
      <div
        class="circular-container"
        style={{
          '--sc-progress-circular-size': `${size}px`,
          '--sc-progress-circular-size-number': `${size}`,
          '--sc-progress-stroke-width': `${strokeWidth}px`,
          // '--sc-progress-circular-initial-rotate': `${rotate}deg`
        }}
      >
        <svg class="progress-ring" viewBox="0 0 100 100">
          <circle
            ref={el => (this.circleEl = el)}
            class="progress-ring__circle"
            stroke-width={strokeWidth}
            r="50"
            cx="50%"
            cy="50%"
            style={{
              '--sc-progress-circular-stroke-dasharray': `${max} ${max * 2}`,
              '--sc-progress-circular-stroke-dashoffset': `${offset}`,
            }}
          />
        </svg>
        {/* label display */}
        <div class="label">
          {this.percentage !== null ? this.percentage + '%' : ''}
        </div>
      </div>
    )
  }

  render() {
    const { percentage, indeterminate, circular, size } = this
    return (
      <Host class={{ indeterminate, circular }}>
        {circular ? (
          this.renderCircular(size)
        ) : (
          <div class="inner" style={{ width: `${percentage}%` }}></div>
        )}
      </Host>
    )
  }
}
