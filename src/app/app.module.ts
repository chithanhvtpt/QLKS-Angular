import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MasterComponent } from './components/layouts/master/master.component';
import { LoginComponent } from './components/pages/login/login.component';
import { RegisterComponent } from './components/pages/register/register.component';

import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';

import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
// import { UserComponent } from './components/user/user.component';
// import { UserListComponent } from './users/user-list/user-list.component';
// import { UserUpdateComponent } from './users/user-update/user-update.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import {UserUpdateComponent} from "./components/users/user-update/user-update.component";
import { HouseUpdateComponent } from './components/houses/house-update/house-update.component';



@NgModule({
  declarations: [
    AppComponent,
    MasterComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    UserUpdateComponent,
    UserDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
