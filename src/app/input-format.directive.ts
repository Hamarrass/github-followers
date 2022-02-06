import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { __values } from 'tslib';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  @Input('appInputFormat') format: any;

  constructor(private el:ElementRef) {


   }

 @HostListener('blur') onBlur(){

    let value1:string  = this.el.nativeElement.value ;

     if(this.format=='lowercase'){

      this.el.nativeElement.value= value1.toUpperCase();

    }
    else {

      this.el.nativeElement.value= value1.toLowerCase();
     }

  }

 @HostListener('focus') onFocus(){

    console.log(' on focus ');

 }
}
