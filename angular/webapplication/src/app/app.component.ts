import { componentFactoryName } from '@angular/compiler';
import { Component, OnChanges } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges{
  ngOnChanges(){

  }
  title = 'webapplication1';
  update;
  sharedata(value){
    this.title = value;
  }
  isimp = false;
  obj = {
    age:10
  }
  color = 'grey';
  collectData(data){
    console.log(data);
    this.title = data;
  }
  name = "check";
  test(data){
    console.log(data);
  }
  
  getPhone(data){
    console.log(data);
  }
  arr = ["srk","pavan",3,4];
  customEventListener(data){
    console.log(data);
  }
}


// Directives

// Component , structureal directives, attribute directives 
