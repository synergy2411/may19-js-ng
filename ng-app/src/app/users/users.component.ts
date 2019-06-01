import { DataService } from './../services/data.service';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers : [DataService]
})
export class UsersComponent implements OnInit {

  @Input('title') title : string;
  @Output("childEvent") childEvent = new EventEmitter<string>();

  onKeyup(value : string){
    console.log(value);
    this.childEvent.emit(value);
  }
  
  constructor(public dataService : DataService){}

  onIncrease(){
    this.dataService.counter++;
  }

  ngOnInit() {
  }

}
