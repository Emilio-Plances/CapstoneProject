import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferredRoutingModule } from './preferred-routing.module';
import { PreferredComponent } from './preferred.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    PreferredComponent
  ],
  imports: [
    CommonModule,
    PreferredRoutingModule,
    SharedModule
  ]
})
export class PreferredModule { }
