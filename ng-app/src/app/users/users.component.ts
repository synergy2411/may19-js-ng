import { DataService } from './../services/data.service';
import { Component, OnInit, Input, EventEmitter, Output, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers : [DataService]
})
export class UsersComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input('title') title : string;
  @Output("childEvent") childEvent = new EventEmitter<string>();

  onKeyup(value : string){
    console.log(value);
    this.childEvent.emit(value);
  }
  
  constructor(public dataService : DataService){
    console.log("Constructor")
  }

  onIncrease(){
    this.dataService.counter++;
  }

  ngOnChanges(){console.log("ngOnChanges")}
  ngOnInit() {console.log("ngOnInit")}
  ngDoCheck(){console.log("ngDoCheck")}
  ngAfterContentInit(){console.log("ngAfterContentInit")}
  ngAfterContentChecked(){console.log("ngAfterContentChecked")}
  ngAfterViewInit(){console.log("ngAfterViewInit")}
  ngAfterViewChecked(){console.log("ngAfterViewChecked")}
  ngOnDestroy(){console.log("ngOnDestroy")}
}
