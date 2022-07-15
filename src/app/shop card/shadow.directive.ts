import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appShadow]'
})
export class ShadowDirective {
  
 

 
  constructor(private ele:ElementRef) {
    this.ele.nativeElement.style.boxShadow=`5px 5px 5px lightblue`;
   }

   @HostListener ('mouseover') onMouseover(){
    this.ele.nativeElement.style.boxShadow=`15px 15px 15px lightblue`;
   }
   @HostListener ('mouseout') onMouseout(){
    this.ele.nativeElement.style.boxShadow=`5px 5px 5px lightblue`;
   }

}
