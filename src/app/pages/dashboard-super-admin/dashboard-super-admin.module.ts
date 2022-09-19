import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardSuperAdminComponent } from './dashboard-super-admin.component';
import { DashboardSuperAdminRoutingModule } from './dashboard-super-admin-routing.module';
import { AdminCreateModule } from 'src/app/components/admin-create/admin-create.module';



@NgModule({
  declarations: [
    DashboardSuperAdminComponent
  ],
  imports: [
    CommonModule,
    DashboardSuperAdminRoutingModule,
    AdminCreateModule
  ]
})
export class DashboardSuperAdminModule { }
