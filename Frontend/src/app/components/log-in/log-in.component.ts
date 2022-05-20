import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { LogInUser } from 'src/app/models/logIn.user';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  public title: string
  public logInUser: LogInUser

  constructor() { 
    this.title = 'Regístrate'
    this.logInUser = new LogInUser('','','','')
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    console.log(this.logInUser)
  }
}

