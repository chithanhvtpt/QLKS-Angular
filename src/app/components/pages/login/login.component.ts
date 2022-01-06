import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {LoginService} from "../../../services/auth/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorLogin: any
  loginForm: FormGroup | any

  constructor(private fb: FormBuilder, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [""],
      password: [""]
    })
  }
  login() {
    let data = this.loginForm.value
    this.loginService.login(data).subscribe(res => {
      if (res.error) {
        this.errorLogin = res.message
      }else {
        console.log(res)
        // let token = res.access_token
        // localStorage.setItem("token", token)
        this.router.navigate([""])
      }

    })
  }

}
