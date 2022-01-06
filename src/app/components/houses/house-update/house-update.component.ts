import { Component, Input, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import { House } from 'src/app/model/house';
import { HouseService } from 'src/app/services/house/house.service';

@Component({
  selector: 'app-house-update',
  templateUrl: './house-update.component.html',
  styleUrls: ['./house-update.component.css']
})

export class HouseUpdateComponent implements OnInit {

  houseForm: FormGroup | any;
  id: any;

  constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = paramMap.get("id");
      this.getHouse(this.id);
    });
  }

  ngOnInit(): void {
  }

  getHouse(id: any) {
    this.houseService.getById(id).subscribe(res => {
      console.log(res)
      this.houseForm = this.fb.group({
        name: [res[0].name],
        image: [res[0].image],
        address: [res[0].address],
        price: [res[0].price],
        description: [res[0].description],
        status: [res[0].status],
        bedroom: [res[0].bedroom],
        bathroom: [res[0].bathroom],
        category_id: [res[0].category_id],
        district_id: [res[0].district_id],
        image_id: [res[0].image_id],
        user_id: [res[0].user_id]
      })
    })

  }

  updateHouse(id: number) {
    const house = this.houseForm.value;
    this.houseService.updateHouse(id, house).subscribe(() => {
      this.router.navigate(["house/list"])
    });
  }
}
