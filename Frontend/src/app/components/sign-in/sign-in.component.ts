import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'

import { SignInUser } from 'src/app/models/signIn.user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass'],
  providers: [ AuthService ]
})
export class SignInComponent implements OnInit {
  public title: string
  public signInUser: SignInUser 
  public errorSesion: boolean

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _cookieService: CookieService
  ) {
    this.title = 'Bienvenido de vuelta'
    this.signInUser = new SignInUser('','')
    this.errorSesion = false
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    this._authService.signIn(this.signInUser).subscribe(
      response => {
        if(response.token){
          // localStorage.setItem('token', response.token)
          this._cookieService.set('token', response.token)
          this._router.navigate(['/'])
        }
      },
      error => {
        this.errorSesion = true
      }
    )
  }

}
