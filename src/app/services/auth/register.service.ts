import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Auth} from "../../model/auth";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  register(user: Auth): Observable<any> {
    return this.http.post(
      environment.api_url + '/register', user
    )
  }

}
