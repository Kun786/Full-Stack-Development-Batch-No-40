import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './admin-components/dash-board/dash-board.component';
import { AdminModuleComponent } from './admin-module.component';

const routes: Routes = [
  { path: '', component: AdminModuleComponent,
  children: [
    {path:'', component:DashBoardComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminModuleRoutingModule { }
