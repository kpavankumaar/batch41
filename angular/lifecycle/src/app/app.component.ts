import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges{
  // @Input() prop;
  ngOnChanges(){
    console.log("AppComponent ngOnChanges");
  }
  constructor(){
    console.log("AppComponent constructor");
  }
  ngOnInit(){
    console.log("AppComponent ngOnInit");
  }
  title = {name:'lifecycle', age: 30};
  updateTitle(data:string){
    this.title = {name : data , age: 30};
  }
  
}
