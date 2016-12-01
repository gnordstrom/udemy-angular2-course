import { Directive, ElementRef, Renderer, HostListener, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[dirHighlight]'
})
export class HighlightDirective {
  @HostListener('mouseenter') mouseover() {
    this.backgroundColor = this.highlightColor;
  };
  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = this.defaultColor;
  };

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  @Input() defaultColor = 'white'
  @Input() highlightColor = 'green'
  private backgroundColor = this.defaultColor;

  constructor() {

  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
  }
  // constructor(private elementRef: ElementRef, private renderer: Renderer) { 
  //   // this.elementRef.nativeElement.style.backgroundColor = 'green';
  //   this.renderer.setElementStyle(this.elementRef.nativeElement, 'background-color', 'green');    
  //   // The second version is the better way to write the same code 
  // }

}
