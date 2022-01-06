import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HouseService } from 'src/app/services/house/house.service';
import {House} from "../../../model/house";
import {Router} from "@angular/router";

@Component({
  selector: 'app-house-create',
  templateUrl: './house-create.component.html',
  styleUrls: ['./house-create.component.css']
})
export class HouseCreateComponent implements OnInit {
  houses: House[]=[];
  createForm: FormGroup = new FormGroup({
    name: new FormControl(),
    image: new FormControl(),
    address: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    status: new FormControl(),
    bedroom: new FormControl(),
    bathroom: new FormControl(),
    category_id: new FormControl(),
    district_id: new FormControl(),
    image_id: new FormControl(),
  })
  constructor(private houseService: HouseService, private router:Router) { }

  ngOnInit(): void {
  }

  create() {
    const data = this.createForm.value;
    this.houseService.createHouse(data).subscribe(res => {
      this.houses.push(res);
     this.router.navigate(["house/list"])
    })
  }


}
