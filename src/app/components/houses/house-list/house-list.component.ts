import { Component, OnInit } from '@angular/core';
import { House } from 'src/app/model/house';
import { HouseService } from 'src/app/services/house/house.service';

@Component({
  selector: 'app-house-list',
  templateUrl: './house-list.component.html',
  styleUrls: ['./house-list.component.css']
})
export class HouseListComponent implements OnInit {
houses: House[]=[];
  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.houseService.getAll().subscribe(houses =>{
      this.houses = houses;
    })
  }

  destroy(i: any){
    const house = this.houses[i];
    // @ts-ignore
    this.houseService.destroy(house.id).subscribe(res =>{
      this.houses = this.houses.filter(
        n=> n.id!==house.id
      )
    })
  }
}
