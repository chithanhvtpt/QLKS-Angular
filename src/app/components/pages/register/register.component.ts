import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validator, Validators} from "@angular/forms";
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
      name: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      address: ["", Validators.required],
      password: ["", Validators.required],
      repassword: ["", Validators.required],
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
