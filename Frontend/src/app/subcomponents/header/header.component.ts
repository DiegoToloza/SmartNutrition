import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
  providers: [UserService]
})
export class HeaderComponent implements OnInit {

  constructor(
    private router: Router,
    private _UserService: UserService
  ) {
  }

  ngOnInit(): void {
  }

  userExist() {
    return this._UserService.userExist()
  }

  getUser(): any {
    return this._UserService.getUser()
  }

  logOutUser() {
    this._UserService.logOut()
    if(this.router.url == '/dietas/mis-dietas'){
      this.router.navigate(['/dietas'])
    }
  }

  logInUser() {
    this._UserService.logIn()
  }

}
