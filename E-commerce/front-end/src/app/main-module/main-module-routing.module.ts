import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-components/home/home.component';
import { MainModuleComponent } from './main-module.component';

const routes: Routes = [{ 
  path: '', component: MainModuleComponent,
  children:[
    {path:'', component :HomeComponent}
  ]
 }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainModuleRoutingModule { }
