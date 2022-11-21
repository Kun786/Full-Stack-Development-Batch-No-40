import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagementModuleRoutingModule } from './management-module-routing.module';
import { ManagementModuleComponent } from './management-module.component';
import { SignInComponent } from './management-components/sign-in/sign-in.component';
import { SignUpComponent } from './management-components/sign-up/sign-up.component';
@NgModule({
  declarations: [
    ManagementModuleComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    ManagementModuleRoutingModule
  ]
})
export class ManagementModuleModule { }
