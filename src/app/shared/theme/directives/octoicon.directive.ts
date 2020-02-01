import { Directive, Input, OnInit, ElementRef, Renderer2, AfterViewInit } from '@angular/core';

import * as octicons from '@primer/octicons';

@Directive({
  selector: '[octicon]'
})
export class OcticonDirective implements OnInit, AfterViewInit {

  @Input() octicon: string;
  @Input() color: string;
  @Input() width: number;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    const el: HTMLElement = this.getElement();
    el.innerHTML = this.generateIcon();

    if (this.color) {
      this.applyStyle('fill', this.color);
    }
    if (this.width) {
      this.applyStyle('width', this.width);
      this.applyStyle('height', '100%');
    }
  }

  ngAfterViewInit(): void {
    if (!this.color) {
      const contextColor = window.getComputedStyle(this.elementRef.nativeElement).color;
      this.applyStyle('fill', contextColor);
    }
  }

  private applyStyle(styleName: string, value: any) {
    const icon: Node|void = this.getIcon();
    if (icon) {
      this.renderer.setStyle(icon, styleName, value);
    }
  }

  private getElement() {
    return this.elementRef.nativeElement;
  }

  private getIcon(): Node|void {
    return this.getElement().firstChild;
  }

  private generateIcon() {
    return octicons[this.octicon].toSVG();
  }

}
