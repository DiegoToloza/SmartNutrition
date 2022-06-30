import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.sass']
})
export class LogInComponent implements OnInit {
  public title: string

  constructor() { 
    this.title = 'Regístrate'
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
  }
}

