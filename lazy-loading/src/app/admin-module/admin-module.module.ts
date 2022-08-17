import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminModuleRoutingModule } from './admin-module-routing.module';
import { AdminModuleComponent } from './admin-module.component';
import { DashBoardComponent } from './admin-components/dash-board/dash-board.component';
import { OrdersComponent } from './admin-components/orders/orders.component';


@NgModule({
  declarations: [
    AdminModuleComponent,
    DashBoardComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    AdminModuleRoutingModule
  ]
})
export class AdminModuleModule { }
