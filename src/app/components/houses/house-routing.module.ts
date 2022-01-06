import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseCreateComponent } from './house-create/house-create.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseUpdateComponent } from './house-update/house-update.component';

const routes: Routes = [
  {path: "list", component: HouseListComponent},
  {path:"create", component: HouseCreateComponent},
  {path:"update/:id", component: HouseUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HouseRoutingModule { }
