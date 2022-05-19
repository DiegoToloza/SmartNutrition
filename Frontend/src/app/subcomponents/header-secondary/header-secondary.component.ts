import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-secondary',
  templateUrl: './header-secondary.component.html',
  styleUrls: ['./header-secondary.component.sass']
})
export class HeaderSecondaryComponent implements OnInit {
  public title: string

  constructor() {
    this.title = 'SmartNutrition'
   }

  ngOnInit(): void {
  }

}
