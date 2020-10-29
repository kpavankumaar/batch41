import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor() { }
  data = "text";
  countries:Array<string> = ['India','Srilanka', 'Pakistan']
  ngOnInit(): void {
  }
  compileFormData(content){
    console.log(content);
  }
  detectChanges(data){
    console.log(data.control.valid);
  }
  emailValidation(data){
    console.log(data);
  }
}
