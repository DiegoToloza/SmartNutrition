import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service'

import { LogInUser } from 'src/app/models/logIn.user';
import { Global } from '../global';
import { SignInUser } from 'src/app/models/signIn.user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url: String;

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private _cookieService: CookieService
  ) { 
    this.url = Global.url + 'auth/'
  }

  signUp(user: LogInUser): Observable<any> {
    return this._http.post(this.url + 'signup', user);
  }

  signIn(user: SignInUser): Observable<any> {
    return this._http.post(this.url + 'signin', user);
  }

  isAdmin(): Observable<any> {
    return this._http.get(this.url + 'isadmin');
  }

  loggedIn() {
    // if(localStorage.getItem('token')) {
    //   return true
    // }
    // return false
    return this._cookieService.check('token')
  }

  getToken() {
    // return localStorage.getItem('token')
    return this._cookieService.get('token')
  }

  logout() {
    // localStorage.removeItem('token')
    this._cookieService.delete('token')
    this._router.navigate(['/iniciar-sesion'])
  }
}
