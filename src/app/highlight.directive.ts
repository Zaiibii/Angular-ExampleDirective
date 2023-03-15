import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private ele:ElementRef, private renderer:Renderer2) { }
  @Input() set appHighlight(condition:Boolean){
    if(condition){
      this.renderer.addClass(this.ele.nativeElement, 'highlight')
    }
  }
}
