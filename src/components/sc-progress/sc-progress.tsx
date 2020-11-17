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

  renderCircular(size) {
    const radius = size / 2
    const gapPercent = 0
    const offsetFactor = (100 - gapPercent) / 100
    const max = offsetFactor * size * Math.PI // c
    const offset = (1 - this.percentage / 100) * max

    const strokeWidth = 4
    const innerRadius = radius - strokeWidth

    /**
     * -270: rotate starting point to bottom center
     */
    const rotate = -270 + (360 * gapPercent) / 100 / 2

    return (
      <div
        class="circular-container"
        style={{
          '--sc-progress-circular-size': `${size}px`,
        }}
      >
        <svg class="progress-ring">
          <circle
            ref={el => (this.circleEl = el)}
            class="progress-ring__circle"
            stroke-width={strokeWidth}
            r={innerRadius}
            cx={radius}
            cy={radius}
            style={{
              '--sc-progress-circular-stroke-dasharray': `${max} ${Number.MAX_SAFE_INTEGER}`,
              '--sc-progress-circular-stroke-dashoffset': `${offset}`,
              '--sc-progress-circular-initial-rotate': `${rotate}deg`,
            }}
          />
        </svg>
        {/* label display */}
        <div class="label">{this.percentage} %</div>
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
