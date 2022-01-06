import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from 'src/app/model/house';
import { environment } from 'src/environments/environment';

const API_URL = `${environment.api_url}`
@Injectable({
  providedIn: 'root'
})
export class HouseService {
  findById(id: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private http: HttpClient) { }

  getAll(): Observable<House[]> {
    return this.http.get<House[]>(API_URL + '/houses')
  }

  createHouse(house: House): Observable<House> {
    return this.http.post<House>(API_URL + '/houses', house);
  }
  destroy(id: number): Observable<House> {
    return this.http.delete<House>(`${API_URL}/houses/${id}`);
  }

  updateHouse(id: any, house: any): Observable<any> {
    return this.http.put(`${API_URL}/houses/${id}`, house);
  }
}
