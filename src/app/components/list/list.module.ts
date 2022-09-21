import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbUserModule } from '@nebular/theme';



@NgModule({
  declarations: [
    ListComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbUserModule,
    NbListModule,
    NbButtonModule,
    NbIconModule
  ],
  exports: [
    ListComponent
  ]
})
export class ListModule { }
