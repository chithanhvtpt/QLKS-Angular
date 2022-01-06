import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HouseRoutingModule } from './house-routing.module';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseCreateComponent } from './house-create/house-create.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { HouseUpdateComponent } from './house-update/house-update.component';
import { HouseUserComponent } from './house-user/house-user.component';


@NgModule({
  declarations: [
    HouseListComponent,
    HouseCreateComponent,
    HouseUpdateComponent,
    HouseUserComponent,
  ],
  imports: [
    CommonModule,
    HouseRoutingModule,
    ReactiveFormsModule,
  ]
})
export class HouseModule { }
