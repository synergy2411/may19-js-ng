import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent{

  data = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("Here the data comes...")
    }, 3000);
  })

}
