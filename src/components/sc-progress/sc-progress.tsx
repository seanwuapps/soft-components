import { Component, Host, h, Prop, Element } from '@stencil/core'
@Component({
  tag: 'sc-progress',
  styleUrl: 'sc-progress.scss',
  shadow: true,
})
export class ScProgress {
  @Element() hostEl: HTMLElement
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
   * radius for circular progress in pixels
   */
  @Prop() radius?: number = 50

  /**
   * Label to be displayed inside the progress
   */
  @Prop() label?: string = ''

  @Prop() angleGap?: number = 0

  circleEl = null

  spinnerAnimationId = null

  renderCircular(radius) {
    // commented codes are attempts to do gapped circular progress bar.
    // const gapPercent = 0
    // const offsetFactor = (100 - gapPercent) / 100
    // const max = offsetFactor * (size * Math.PI) // c
    /**
     * -270: rotate starting point to bottom center
     */
    // const rotate = -270 + (360 * gapPercent) / 100 / 2
    var circumference = radius * 2 * Math.PI

    const offset = (1 - this.percentage / 100) * circumference
    const strokeWidth = radius / 10

    const size = 2 * (radius + strokeWidth)

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
        <svg class="progress-ring">
          <circle
            ref={el => (this.circleEl = el)}
            class="progress-ring__circle"
            stroke-width={strokeWidth}
            stroke-linecap="butt"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            style={{
              '--sc-progress-circular-stroke-dasharray': `${circumference} ${circumference}`,
              '--sc-progress-circular-stroke-dashoffset': `${offset}`,
            }}
          />
        </svg>
        {/* label display */}
        <div class="label">
          <slot name="label"></slot>
          {this.label}
        </div>
      </div>
    )
  }

  render() {
    const { percentage, indeterminate, circular, radius } = this
    return (
      <Host
        class={{ indeterminate, circular }}
        aria-valuenow={percentage}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        {circular ? (
          this.renderCircular(radius)
        ) : (
          <div class="inner" style={{ width: `${percentage}%` }}>
            {this.label.length ? <span class="label">{this.label}</span> : null}
          </div>
        )}
      </Host>
    )
  }
}
