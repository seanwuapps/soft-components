import { Component, Host, h, Prop } from '@stencil/core';

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
  @Prop() indeterminate: boolean = false;

  /**
   * Set shape of the progress indicator to be circular
   */
  @Prop() circular: boolean = false

  render() {
    const { percentage, indeterminate, circular} = this
    return (
      <Host class={{circular,indeterminate }}>
        <div class="inner" style={{width: `${percentage}%`}}></div>
      </Host>
    );
  }

}
