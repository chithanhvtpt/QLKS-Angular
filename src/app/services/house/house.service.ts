import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/model/house';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseService {


  constructor(private http: HttpClient) { }

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(
      environment.api_url + '/houses')
  }

  createHouse(house: House): Observable<House> {
    return this.http.post<House>(
      environment.api_url + '/houses', house);
  }
  destroy(id: number): Observable<House> {
    return this.http.delete<House>(
      `${environment.api_url}/houses/${id}`);
  }

  updateHouse(id: any, house: House): Observable<any> {
    return this.http.put(`${environment.api_url}/houses/${id}`, house);
  }
  getById(id: any): Observable<any> {
    return this.http.get(
      environment.api_url + "/houses" + `/${id}`
    )
  }
}
