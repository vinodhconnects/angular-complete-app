import { Directive,ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {
@Input() highlight:string=""
  //elementRef would get the target elements referenc
  // <h1 [highlight]="data"> </h1> , in this case elementref would represent h1
  constructor(private el:ElementRef) { }

  @HostListener("mouseover")
  doSomething():void {
      let element =   this.el.nativeElement
      let regex=/(good|excellent|great|super|extraordinary|satisfied)/
      if(regex.test(this.highlight.toLowerCase())) {
          element.style.color ="darkred"
          element.style.fontSize="26px"
      }
  }

  @HostListener("mouseleave")
  turnOriginal():void {
    let element = this.el.nativeElement
    element.style.color ="rgb(54, 54, 54)"
    element.style.fontSize="16px"
  }
 
}
