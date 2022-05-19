import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { SignInUser } from 'src/app/models/signIn.user';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  public title: string
  public signInUser: SignInUser 

  constructor() {
    this.title = 'Bienvenido de vuelta'
    this.signInUser = new SignInUser('','')
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
    console.log(this.signInUser)
  }

}
