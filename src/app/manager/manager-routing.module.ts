import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MangerdashboardComponent } from './mangerdashboard/mangerdashboard.component';

const routes: Routes = [
  {
    path:'',
    component:MangerdashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
