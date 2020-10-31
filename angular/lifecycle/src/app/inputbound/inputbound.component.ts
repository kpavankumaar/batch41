import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputbound',
  templateUrl: './inputbound.component.html',
  styleUrls: ['./inputbound.component.css']
})
export class InputboundComponent implements OnInit {
  inputboundprop = "inputbound";
  @Input() childtitle:string;
  ngOnChanges(select){
    console.log("InputboundComponent ngOnChanges", select.childtitle.currentValue);
  }

  ngOnInit(): void {
    console.log("InputboundComponent ngOnInit");
    // this.childtitle = {}
  }
  constructor(){
    console.log("InputboundComponent constructor");
  }
}
