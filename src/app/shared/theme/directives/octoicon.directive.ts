import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit {

  @Input() octicon: string;
  @Input() color: string;
  @Input() width: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    const el: HTMLElement = this.elementRef.nativeElement;
    el.innerHTML = octicons[this.octicon].toSVG();
console.log(window.getComputedStyle(this.elementRef.nativeElement));
    const contextColor = window.getComputedStyle(this.elementRef.nativeElement).color;

    console.log("contextColor", contextColor);

    const icon: Node = el.firstChild;
    if (this.color || contextColor) {
      this.renderer.setStyle(icon, 'fill', this.color || contextColor);
    }
    if (this.width) {
      this.renderer.setStyle(icon, 'width', this.width);
      this.renderer.setStyle(icon, 'height', '100%');
    }
  }

}
