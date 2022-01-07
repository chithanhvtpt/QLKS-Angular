import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseUpdateComponent } from './house-update/house-update.component';
import {HomeComponent} from "../layouts/home/home.component";
import {HouseUserComponent} from "./house-user/house-user.component";

const routes: Routes = [
  {
    path: "", component: HouseListComponent
  },
  {
    path:"create", component: HouseCreateComponent
  },
  {
    path:"update/:id", component: HouseUpdateComponent
  },
  {
    path: "host", component: HouseUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
