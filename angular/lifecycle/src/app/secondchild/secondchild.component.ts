import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-secondchild',
  templateUrl: './secondchild.component.html',
  styleUrls: ['./secondchild.component.css']
})
export class SecondchildComponent implements OnInit {
  @Input() data: string;
  ngOnChanges(select){
    console.log("SecondchildComponent ngOnChanges", select);
  }

  ngOnInit(): void {
    console.log("SecondchildComponent ngOnInit");
  }
  constructor(){
    console.log("SecondchildComponent constructor");
  }

}
