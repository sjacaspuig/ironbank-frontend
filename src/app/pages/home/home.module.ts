import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NbButtonModule, NbCardModule } from '@nebular/theme';
import { AccountHolderCreateModule } from 'src/app/components/account-holder-create/account-holder-create.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbCardModule,
    NbButtonModule,
    AccountHolderCreateModule
  ]
})
export class HomeModule { }
