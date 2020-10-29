import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childsample',
  templateUrl: './childsample.component.html',
  styleUrls: ['./childsample.component.css']
})
export class ChildsampleComponent implements OnInit {

  constructor() { }
  @Output() sendData: EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
  }
  update(details){
    this.sendData.emit(details);
  }
}
