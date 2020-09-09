import {
  Component,
  Host,
  h,
  Prop,
  Method,
  Event,
  EventEmitter,
  Element,
} from "@stencil/core";

@Component({
  tag: "sc-tab-button",
  styleUrl: "sc-tab-button.scss",
  shadow: true,
})
export class TabButton {
  @Element() el: HTMLElement;
  /**
   * When prop is set, this tab is shown, only one `<sc-tab>` element can be active inside `<sc-tabs>`
   */
  @Prop({ reflect: true, mutable: true }) active: boolean | undefined;

  /**
   * id of the target `sc-tab-content` tag
   */
  @Prop() target!: string;

  /**
   * The button shape.
   */
  @Prop({ reflect: true }) block?: boolean | undefined = false;

  /**
   * Icon only button
   */
  @Prop({ reflect: true }) icon?: boolean | undefined = false;

  /**
   * If prop exists, button will have an engraved-styled border
   */
  @Prop({ reflect: true }) bordered?: boolean | undefined = false;

  @Event() activeEvent: EventEmitter<HTMLElement>;
  @Event() inactiveEvent: EventEmitter<HTMLElement>;

  targetEl: HTMLScTabContentElement;

  @Method()
  async setActive(emitEvent: boolean = true) {
    this.active = true;
    this.targetEl.setActive();
    if (emitEvent) {
      this.activeEvent.emit(this.el);
    }
  }

  @Method()
  async setInactive(emitEvent: boolean = true) {
    this.active = false;
    this.targetEl.setInactive();
    if (emitEvent) {
      this.inactiveEvent.emit(this.el);
    }
  }

  async componentDidLoad() {
    const container = this.el.closest("sc-tabs") as HTMLElement;
    this.targetEl = container.querySelector("#" + this.target);
    if (this.active) {
      this.setActive();
    }
  }

  private onClick = (e) => {
    e.preventDefault();
    this.setActive();
  };

  render() {
    const { active, target, block, icon, bordered } = this;
    return (
      <Host class={{ active, block }}>
        <sc-button
          {...{
            block,
            icon,
            bordered,
          }}
          class={{ active, "tab-button": true }}
          href={`#${target}`}
          onClick={(e) => this.onClick(e)}
        >
          <slot></slot>
        </sc-button>
      </Host>
    );
  }
}
