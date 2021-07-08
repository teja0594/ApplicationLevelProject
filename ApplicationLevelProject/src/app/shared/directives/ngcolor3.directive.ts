import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngColor3]'
})
export class Ngcolor3Directive {

  @HostBinding('style.backgroundColor')bgcolor:String
  @HostBinding('style.border')border:String
  constructor()
   {
    this.bgcolor="white"
    this.border="1px solid white"
   }

   @HostListener('mouseover') onMouseOver()
   {
     this.bgcolor="rgb(173, 235, 240)"

   }

   @HostListener('click') onMouseClick()
   {
     this.border="1px solid rgb(173, 235, 240)"
   }
   @HostListener('mouseleave') onMouseLeave()
   {
     this.bgcolor="white"

   }

}
