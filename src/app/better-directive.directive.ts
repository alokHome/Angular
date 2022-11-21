import { parseHostBindings } from '@angular/compiler';
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterDirectiveDirective implements OnInit {

  constructor(private elem: ElementRef, private rend:Renderer2 ) { }
 
  ngOnInit(): void {
   this.rend.setStyle(this.elem.nativeElement,'background-color','yellow');
  }

  @HostListener('mouseenter') mouseover(envent: Event){
   // this.rend.setStyle(this.elem.nativeElement,'background-color','yellow');
   this.backgroundColor='blue';
    }

    @HostListener('mouseleave') mousLeave(envent: Event){
      //this.rend.setStyle(this.elem.nativeElement,'background-color','red');
      this.backgroundColor='red';
   }

  @HostBinding('style.backgroundColor') backgroundColor:string='transparent';
}
