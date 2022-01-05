import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {RegisterService} from "../../../services/auth/register.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  updateForm: FormGroup | any
  id: any

  constructor(private userService: UserService, private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id")
      this.getById(this.id)
    })
  }

  ngOnInit(): void {
  }
  getById(id: any) {
    this.userService.getById(id).subscribe( res => {
      this.updateForm = this.fb.group({
        name: [res.name],
        phone: [res.phone],
        address: [res.address],
        avatar: [res.avatar],
      })
    })
  }
  update(id: any) {
    let data = this.updateForm.value
    this.userService.update(id, data).subscribe(() => {
      this.router.navigate([""])
    })
  }

}
