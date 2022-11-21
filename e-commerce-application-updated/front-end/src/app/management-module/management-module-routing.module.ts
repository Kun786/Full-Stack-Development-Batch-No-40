import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './management-components/sign-in/sign-in.component';
import { SignUpComponent } from './management-components/sign-up/sign-up.component';
import { ManagementModuleComponent } from './management-module.component';

const routes: Routes = [
  { 
  path: '', component: ManagementModuleComponent,
  children:[
    { path:'sign-in', component:SignInComponent },
    { path:'sign-up', component:SignUpComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementModuleRoutingModule { }
