import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'admin',
    loadChildren: () => import('./admin-module/admin-module.module').then(m => m.AdminModuleModule) 
  }, 
  { 
    path: '',
  loadChildren: () => import('./main-module/main-module.module').then(m => m.MainModuleModule) 
},
  { 
    path: 'UserModule', 
    loadChildren: () => import('./user-module/user-module.module').then(m => m.UserModuleModule) 
  },
  { path: 'management', loadChildren: () => import('./management-module/management-module.module').then(m => m.ManagementModuleModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
