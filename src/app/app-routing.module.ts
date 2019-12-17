import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:'user',
    loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'manager',
    loadChildren:()=>import('./manager/manager.module').then(m=>m.ManagerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
