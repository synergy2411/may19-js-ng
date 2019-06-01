import { APP_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { LoginComponent } from './login/login.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecComponent } from './product/spec/spec.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ObservableDemoComponent,
    LoginComponent,
    ContactUsComponent,
    HeaderComponent,
    ProductComponent,
    OverviewComponent,
    SpecComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
