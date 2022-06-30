import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: String;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = "http://localhost:3000/api/"
  }

  signUp(user: any) {
    return this._http.post<any>(this.url + '/signup', user);
  }
}
