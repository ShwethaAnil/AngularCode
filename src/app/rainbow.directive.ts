import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appRainbow]",
})
export class RainbowDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.changeBgColor("yellow");
  }
  // styling --> @HostBinding
  // event binding --> @HostListener

  @HostBinding("style.border") border: string;

  @HostBinding("style.font-size") fs: string;

  changeBgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, "background-color", color);
  }

  @HostListener("mouseenter") onmouseOver() {
    this.border = "6px solid green";
    this.fs = "2em";
    this.changeBgColor("pink");
  }

  @HostListener("mouseleave") onmouseLeave() {
    this.border = "2px solid cyan";
    this.changeBgColor("orange");
  }
}
