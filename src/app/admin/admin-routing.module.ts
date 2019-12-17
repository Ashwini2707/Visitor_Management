import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PendingregistrationsComponent } from './pendingregistrations/pendingregistrations.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllmanagersComponent } from './allmanagers/allmanagers.component';

const routes: Routes = [

 

  {
    path:'',
    component:AdmindashboardComponent,
    children:[{
      path:'pendingRegistrations',
      component:PendingregistrationsComponent
    },
    {
      path:'Allmangers',
      component:AllmanagersComponent
    },
    {
      path:'Allusers',
      component:AllusersComponent
    }
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
