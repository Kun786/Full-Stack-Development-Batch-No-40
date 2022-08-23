import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModuleRoutingModule } from './main-module-routing.module';
import { MainModuleComponent } from './main-module.component';
import { HeaderComponent } from './main-components/header/header.component';
import { FooterComponent } from './main-components/footer/footer.component';
import { HomeComponent } from './main-components/home/home.component';
import { ProductsComponent } from './main-components/products/products.component';
import { ViewProductsComponent } from './main-components/view-products/view-products.component';
import { CheckOutComponent } from './main-components/check-out/check-out.component';
import { OrderSuccessfulComponent } from './main-components/order-successful/order-successful.component';
import { OrderFailedComponent } from './main-components/order-failed/order-failed.component';
import { WildCardComponent } from './main-components/wild-card/wild-card.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactUsComponent } from './main-components/contact-us/contact-us.component';
import { AboutUsComponent } from './main-components/about-us/about-us.component';


@NgModule({
  declarations: [
    MainModuleComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    ViewProductsComponent,
    CheckOutComponent,
    OrderSuccessfulComponent,
    OrderFailedComponent,
    WildCardComponent,
    ContactUsComponent,
    AboutUsComponent
  ],
  imports: [
    CommonModule,
    MainModuleRoutingModule
  ]
})
export class MainModuleModule { }
