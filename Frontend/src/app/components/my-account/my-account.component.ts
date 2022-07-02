import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserService } from 'src/app/services/user/user.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.sass']
})
export class MyAccountComponent implements OnInit {
  public user: User
  public url: string
  public view: boolean

  constructor(
    private _authService: AuthService,
    private _userService: UserService
  ) { 
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

  logOut() {
    return this._authService.logout()
  }

  getUserImage() {
    return this.url + 'get-image/' + this.user.image
  }

}
