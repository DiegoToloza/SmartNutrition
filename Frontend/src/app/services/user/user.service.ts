import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from 'src/app/models/user';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url + 'users/'
  }

  getCurrentUser(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url + 'get-user', {headers: headers})
  }
}
