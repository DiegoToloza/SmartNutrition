import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.sass']
})
export class ErrorComponent implements OnInit {
  public title: string
  public content: string
  public numberImage: number

  constructor() { 
    this.title = 'Página no encontrada'
    this.content = 'Lo sentimos, esta página no se encuentra en nuestro sistema.'
    this.numberImage = 0
  }

  ngOnInit(): void {
    this.numberImage = Math.floor(Math.random() * 5) + 1
  }
}
