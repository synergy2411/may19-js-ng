import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent {

  observable = Observable.create((observer) => {

    setTimeout(()=>{
      observer.next("First Package");
    }, 1000);
    setTimeout(()=>{
      observer.next("Second Package");
    }, 3000);
    setTimeout(()=>{
      observer.next("Third Package")
    }, 5000);

    setTimeout(()=>{
      observer.complete();
    }, 5000);
    
  })

  subs : any;

  onSubscribe(){
    this.subs = this.observable.subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log("COMPLETED")
    )
  }

  onUnsubscribe(){
    this.subs.unsubscribe();
  }

}