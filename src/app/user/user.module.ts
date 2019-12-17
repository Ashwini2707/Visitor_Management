import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyvisitorsComponent } from './myvisitors/myvisitors.component';


@NgModule({
  declarations: [UserdashboardComponent, MyvisitorsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
