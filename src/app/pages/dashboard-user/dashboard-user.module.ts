import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardUserComponent } from './dashboard-user.component';
import { DashboardUserRoutingModule } from './dashboard-user-routing.module';



@NgModule({
  declarations: [
    DashboardUserComponent
  ],
  imports: [
    CommonModule,
    DashboardUserRoutingModule
  ]
})
export class DashboardUserModule { }
