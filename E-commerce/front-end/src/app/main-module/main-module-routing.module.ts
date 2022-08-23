import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './main-components/about-us/about-us.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { HomeComponent } from './main-components/home/home.component';
import { OrderFailedComponent } from './main-components/order-failed/order-failed.component';
import { OrderSuccessfulComponent } from './main-components/order-successful/order-successful.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { WildCardComponent } from './main-components/wild-card/wild-card.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ 
  path: '', component: MainModuleComponent,
  children:[
    {path:'', component :HomeComponent},
    {path:'home', component :HomeComponent},
    {path:'product', component :ProductsComponent},
    {path:'view-product', component :ViewProductsComponent},
    {path:'check-out', component :CheckOutComponent},
    {path:'about-us', component :AboutUsComponent},
    {path:'contact-us', component :ContactUsComponent},
    {path:'order-successful', component :OrderSuccessfulComponent},
    {path:'order-failed', component :OrderFailedComponent},
    // {path:'**', component :WildCardComponent},
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }


