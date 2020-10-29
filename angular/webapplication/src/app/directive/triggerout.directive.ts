import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appTriggerout]'
})
export class TriggeroutDirective {

  constructor() { }
  @Output() onClickEvent:EventEmitter<any> = new EventEmitter();

  @HostListener('click',['$event']) onClickEl(){
    this.onClickEvent.emit('color updated');
  }
}
