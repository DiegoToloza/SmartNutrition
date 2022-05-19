import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.sass']
})
export class AboutUsComponent implements OnInit {
  public title: string

  constructor() { 
    this.title = "Exercitation veniam consequat sunt nostrud amet."
  }

  ngOnInit(): void {
  }

}
