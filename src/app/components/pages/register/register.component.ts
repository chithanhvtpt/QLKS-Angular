import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../services/auth/register.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any
  constructor(private registerService: RegisterService, private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      name: [""],
      phone: [""],
      email: [""],
      address: [""],
      password: [""],
      repassword: [""],
    })
  }

  ngOnInit(): void {
  }

  register() {
    let data = this.registerForm?.value
    this.registerService.register(data).subscribe( () => {
      this.router.navigate(["login"])
    })
  }

}
