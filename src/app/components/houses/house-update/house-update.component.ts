import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { House } from 'src/app/model/house';
import { HouseService } from 'src/app/services/house/house.service';

@Component({
  selector: 'app-house-update',
  templateUrl: './house-update.component.html',
  styleUrls: ['./house-update.component.css']
})

export class HouseUpdateComponent implements OnInit {

  houseForm: any = FormGroup;
  id: 0 | undefined;

  // constructor(private houseService: HouseService, private activatedRoute: ActivatedRoute) {
  //   this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
  //     this.id = +paramMap.get('id');
  //     this.getHouse(this.id);
  //   });
  // }

  ngOnInit(): void {
  }

  // getHouse(id: number) {
  //   return this.houseService.findById(id).subscribe(house => {
  //     this.houseForm = new FormGroup({
  //       name: new FormControl(house.name),
  //     });
  //   });
  // }

  // updateHouse(id: number) {
  //   const house = this.houseForm.value;
  //   this.houseService.updateHouse(id, house).subscribe(() => {
  //     alert('Cập nhật thành công');
  //   }, e => {
  //     console.log(e);
  //   });
  // }
}
