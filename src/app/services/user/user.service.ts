import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {User} from "../../model/user";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getById(id: any): Observable<any> {
    return this.http.get(
      environment.api_url + "/users" + id
    )
  }

  update(id: number ,user: User): Observable<any> {
    return this.http.put(
      environment.api_url + "/users" + id, user
    )
  }
}

