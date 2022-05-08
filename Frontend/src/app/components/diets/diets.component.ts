import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.sass'],
  providers: [DietService]
})
export class DietsComponent implements OnInit {
  public diets: Array<Diet>
  public dietActive: Diet

  constructor(
    private router: Router,
    private _DietService: DietService
  ) {
    this.diets = new Array()
    this.dietActive = new Diet('','','','','')
  }

  ngOnInit(): void {
    if (this.router.url == '/dietas') {
      this.getAllDiets()
    }else if (this.router.url == '/dietas/no-veganas') {
      this.getDietsNoVegans()
    }else if(this.router.url == '/dietas/veganas'){
      this.getDietsVegans()
    }else if(this.router.url == '/dietas/mis-dietas'){
      this.getMyDiets()
    }
  }

  getAllDiets() {
    this.diets = this._DietService.getAllDiets()
  }

  getDietsNoVegans() {
    this.diets = this._DietService.getDietsNoVegans()
  }

  getDietsVegans() {
    this.diets = this._DietService.getDietsVegans()
  }

  getMyDiets() {
    this.diets = this._DietService.getMyDiets()
  }

  displayDiet(indice:any) {
    this.dietActive = this.diets[indice]
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  disableDisplayDiet() {
    this.dietActive = new Diet('','','','','')
  }
}
