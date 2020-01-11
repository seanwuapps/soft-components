import {
  Component,
  Host,
  h,
  Element,
  Listen,
  Method,
  State,
  Event,
  EventEmitter
} from "@stencil/core";

@Component({
  tag: "sc-tab-content",
  styleUrl: "tab-content.scss",
  shadow: true
})
export class TabContent {
  @Element() el: HTMLElement;

  @State() animationDirection: "in" | "out" | "" = "";

  @Event() activeCompleted: EventEmitter<void>;
  @Event() inactiveCompleted: EventEmitter<void>;

  connectedCallback() {
    // this.el.addEventListener("transitionstart", () => {
    //   this.el.classList.add("animating");
    // });
  }

  @Listen("transitionstart")
  handleAnimationStart() {
    console.log("transition start " + this.el.id);

    if (this.animationDirection === "in") {
      this.el.style.display = "block";
    }
    this.el.classList.add("animating");
    this.el.classList.remove("animated");
  }

  @Listen("transitionend")
  handleAnimationEnd() {
    if (this.animationDirection === "in") {
      this.activeCompleted.emit();
    } else {
      this.inactiveCompleted.emit();
      this.el.style.display = "none";
    }
    this.animationDirection = "";
  }

  @Method()
  setActive() {
    this.animationDirection = "in";
    this.el.classList.add("active");
  }

  @Method()
  setInactive() {
    this.animationDirection = "out";
    this.el.classList.remove("active");
  }

  // mostly for css transition purpose
  render() {
    return (
      <Host class={this.animationDirection}>
        <slot></slot>
      </Host>
    );
  }
}
