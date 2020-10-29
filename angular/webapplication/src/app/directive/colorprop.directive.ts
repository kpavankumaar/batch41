import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: '[appColorProp]'
})

export class ColorPropDirective{
    constructor(private el: ElementRef){
        let value = el.nativeElement.getAttribute('appColorProp');

        console.log(value);// let item of arr; let i = index
        // for(let i  = 0; i < 2; i++){
        //     var listElement = document.createElement('li');
        //     listElement.innerText = "added li element using directive";
        //     el.nativeElement.appendChild(listElement)
        // }
        
        
    }
    @HostListener('mouseenter') mouseMove(){
        this.el.nativeElement.style.backgroundColor = 'yellow';
    }
    @HostListener('mouseleave') mouseLeave(){
        this.el.nativeElement.style.backgroundColor = null;
    }


}
