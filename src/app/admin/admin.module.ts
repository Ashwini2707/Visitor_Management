import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { PendingregistrationsComponent } from './pendingregistrations/pendingregistrations.component';
import { AllusersComponent } from './allusers/allusers.component';
import { AllmanagersComponent } from './allmanagers/allmanagers.component';


@NgModule({
  declarations: [AdmindashboardComponent, PendingregistrationsComponent, AllusersComponent, AllmanagersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
