import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service'

import { LogInUser } from 'src/app/models/logIn.user';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass'],
  providers: [AuthService]
})
export class LogInComponent implements OnInit {
  public title: string
  public logInUser: LogInUser
  public errorSesion: boolean
  public errorMessage: string

  constructor(
    private _authService: AuthService,
    private _router: Router,
    private _cookieService: CookieService
  ) {
    this.title = 'Regístrate'
    this.logInUser = new LogInUser('', '', '', '')
    this.errorSesion = false,
      this.errorMessage = ''
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (this.logInUser.password != this.logInUser.passwordCheck) {
      this.errorSesion = true
      this.errorMessage = 'Las contraseñas no coinciden'
    } else {
      this._authService.signUp(this.logInUser).subscribe(
        response => {
          if (response.token) {
            // localStorage.setItem('token', response.token)
            this._cookieService.set('token', response.token)
            this._router.navigate(['/'])
          }
        },
        error => {
          this.errorSesion = true
          if (error.error.message == 'The user already exists') {
            this.errorMessage = 'Usuario ya existe'
          } else if(error.error.message == 'The email already exists') {
            this.errorMessage = 'E-mail ya existe'
          }
        }
      )
    }
  }

}

