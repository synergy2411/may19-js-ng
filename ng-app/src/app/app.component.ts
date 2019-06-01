import { UsersComponent } from './users/users.component';
import { DataService } from './services/data.service';
import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class AppComponent {
  title = 'Angular!';
  dataFromChild : string;
  
  jsSnippets = "Basic Content <script>alert('Hello from JS')</script> Basic Contents" 

  onChildEvent(val : string ) {
    console.log("Parent Val : ", val);
    this.dataFromChild = val;
  }


  dangerUrl = "javascript:alert('Hello World')";
  safeUrl : any;

  constructor(public dataService : DataService,
              private sanitize : DomSanitizer,
              private cdRef : ChangeDetectorRef){
                // this.cdRef.detach();
                this.safeUrl = this.sanitize.bypassSecurityTrustResourceUrl(this.dangerUrl);
              }

  onIncrease(){
    this.dataService.counter++;
    
  }

}
