import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecComponent } from './product/spec/spec.component';

export const APP_ROUTES : Routes = [{
    path : "",
    redirectTo : 'login',
    pathMatch : 'full' 
}, {
    path : "login",
    component : LoginComponent
}, {
    path : "observable",
    component : ObservableDemoComponent
}, {
    path : 'contact',
    component  : ContactUsComponent
}, {
    path : "product",
    component : ProductComponent,
    children : [{
        path : "overview/:id/:name",
        component : OverviewComponent
    }, {
        path : "spec",
        component : SpecComponent
    }]
},{
    path : 'lazy',
    loadChildren : './lazy/lazy.module#LazyModule'           // path/to/module/ModuleFileName#ModuleClassName
},{
    path : "**",
    redirectTo : "login",
    pathMatch : 'full'
}]


// http://localhost:4200/product/overview