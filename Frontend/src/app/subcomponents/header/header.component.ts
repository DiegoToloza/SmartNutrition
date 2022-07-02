import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Global } from 'src/app/services/global';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [AuthService]
})
export class HeaderComponent implements OnInit {
  public title: string
  public user: User
  public url: string
  public view: boolean

  constructor(
    private _authService: AuthService,
    private _userService: UserService
  ) {
    this.title = 'SmartNutrition'
    this.user = new User('','','','')
    this.url = Global.url + 'users/'
    this.view = false
  }

  ngOnInit(): void {
    this._userService.getCurrentUser().subscribe(
      response => {
        this.user._id = response._id
        this.user.username = response.username
        this.user.email = response.email
        this.user.image = response.image
      }
    )

    this._authService.isAdmin().subscribe(
      response => {
        if(response.result) {
          this.view = response.result
        }
      }
    )
  }

  loggedIn() {
    return this._authService.loggedIn()
  }

  logOut() {
    return this._authService.logout()
  }

  getUserImage() {
    return this.url + 'get-image/' + this.user.image
  }

}
