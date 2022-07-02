import { Component, OnInit } from '@angular/core';

import { Diet } from 'src/app/models/diet';
import { AuthService } from 'src/app/services/auth/auth.service';
import { DietService } from 'src/app/services/diet/diet.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.sass'],
  providers: [DietService, AuthService]
})
export class DietsComponent implements OnInit {
  public diets: Array<Diet>
  public url: string
  public categoryActive: string
  public view: boolean

  constructor(
    private _dietService: DietService,
    private _authService: AuthService
  ) {
    this.diets = new Array()
    this.url = Global.url + 'diets/'
    this.categoryActive = ''
    this.view = false
  }

  ngOnInit(): void {
    this.getDiets()

    this._authService.isAdmin().subscribe(
      response => {
        if(response.result) {
          this.view = response.result
        }
      }
    )
  }

  getDiets() {
    this._dietService.getDiets().subscribe(
      response => {
        if (response.diets) {
          this.diets = response.diets
        }
      }
    )
  }

  getDietsCategory(category: string) {
    this._dietService.getDietsCategory(category).subscribe(
      response => {
        if (response.diets) {
          this.diets = response.diets
        }
      }
    )
  }

  getDietImage(diet: Diet) {
    return this.url + 'get-image/' + diet.image
  }

  updateCategory(category: string) {
    if (category == this.categoryActive) {
      this.categoryActive = ''
      this.getDiets()
    } else {
      this.categoryActive = category
      this.getDietsCategory(this.categoryActive)
    }
  }
}
