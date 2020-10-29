import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCarryArr]'
})
export class CarryArrDirective {
  private data;
  constructor(public el:ElementRef) { }
  @Input() array;
  @HostListener('mouseenter') createEl(){
    this.el.nativeElement.style.backgroundColor = 'red';
    console.log(this.data);
    for(let i  = 0; i < this.data.length; i++){
        var listElement = document.createElement('li');
        listElement.innerText = "added li element using directive";
        this.el.nativeElement.appendChild(listElement)

    }
  }
  ngOnInit(){
    console.log(this.array);
    this.data = this.array;
  }
}
