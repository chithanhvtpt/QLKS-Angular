import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./components/pages/login/login.component";
import { RegisterComponent } from "./components/pages/register/register.component";
import { MasterComponent } from "./components/layouts/master/master.component";
import { HouseListComponent } from './components/houses/house-list/house-list.component';
import {HomeComponent} from "./components/layouts/home/home.component";

const routes: Routes = [
  {
    path: "", component: MasterComponent,
    children: [
      {
        path: "home",component: HomeComponent
      },
      {
        path: "house",
        loadChildren: () => import("./components/houses/house.module").then(module => module.HouseModule)
      }
    ]
  },

  {
    path: "login", component: LoginComponent
  },
  {
    path: "register", component: RegisterComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
