import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardAdminComponent } from './dashboard-admin.component';
import { DashboardAdminRoutingModule } from './dashboard-admin-routing.module';
import { AccountHolderCreateModule } from 'src/app/components/account-holder-create/account-holder-create.module';
import { ThirdPartyCreateModule } from 'src/app/components/third-party-create/third-party-create.module';



@NgModule({
  declarations: [
    DashboardAdminComponent
  ],
  imports: [
    CommonModule,
    DashboardAdminRoutingModule,
    AccountHolderCreateModule,
    ThirdPartyCreateModule
  ]
})
export class DashboardAdminModule { }
