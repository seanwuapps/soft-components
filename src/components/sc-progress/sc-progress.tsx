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
    const max = size * Math.PI // c
    const offset = (1 - this.percentage / 100) * max

    const strokeWidth = size / 10
    const innerRadius = radius - strokeWidth * 3


    return (
      <div
        class="circular-container"
        style={{
          '--sc-progress-circular-size': `${size}px`,
          '--sc-progress-stroke-width': `${strokeWidth}px`,
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
              '--sc-progress-circular-stroke-dasharray': `${max} ${Number.MAX_SAFE_INTEGER}`,
              '--sc-progress-circular-stroke-dashoffset': `${offset}`,
            }}
          />
        </svg>
        {/* label display */}
        <div class="label">{this.percentage}%</div>
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
