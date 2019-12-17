import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManagerRoutingModule } from './manager-routing.module';
import { MangerdashboardComponent } from './mangerdashboard/mangerdashboard.component';
import { ShowpipePipe } from './showpipe.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [MangerdashboardComponent, ShowpipePipe],
  imports: [
    CommonModule,
    ManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ManagerModule { }
