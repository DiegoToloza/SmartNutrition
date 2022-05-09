import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.sass'],
  providers: [DietService, UserService]
})
export class DietsComponent implements OnInit {
  public diets: Array<Diet>
  public dietActive: Diet

  constructor(
    private router: Router,
    private _DietService: DietService,
    private _UserService: UserService
  ) {
    this.diets = new Array()
    this.dietActive = new Diet()
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
    this.diets = this._DietService.getMyDiets(this._UserService.getUser())
    console.log(this._UserService.getUser())
  }

  displayDiet(indice: any) {
    this.dietActive = this.diets[indice]
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  disableDisplayDiet() {
    this.dietActive = new Diet()
  }

  userExist() {
    return this._UserService.userExist()
  }
}
