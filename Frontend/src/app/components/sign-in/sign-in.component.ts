import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.sass']
})
export class SignInComponent implements OnInit {
  public title: string

  constructor() {
    this.title = 'Bienvenido de vuelta'
   }

  ngOnInit(): void {
  }

  onSubmit(form: any){
  }

}
