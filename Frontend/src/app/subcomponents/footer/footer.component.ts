import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass']
})
export class FooterComponent implements OnInit {
  public title: string

  constructor() { 
    this.title = 'SmartNutrition'
  }

  ngOnInit(): void { }

}
