import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import { CardComponent } from './card/card.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ListRoutingModule,
    SharedModule,
  ]
})
export class ListModule { }
