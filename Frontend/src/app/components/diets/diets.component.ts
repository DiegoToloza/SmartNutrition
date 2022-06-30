import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet/diet.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.sass'],
  providers: [DietService]
})
export class DietsComponent implements OnInit {
  public diets: Array<Diet>
  public activo: string
  public url: string
  public addDiet: boolean

  constructor(
    private _dietService: DietService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.diets = new Array()
    this.activo = ''
    this.url = Global.url
    this.addDiet = true
  }

  ngOnInit(): void {
    this.getDiets()
  }

  getDiets(){
    this._dietService.getDiets().subscribe(
      response => {
        this.diets = response
      }
    )
  }

  getDietsCategory(category: string){
    this._dietService.getDietsCategory(category).subscribe(
      response => {
        this.diets = response
      }
    )
  }

  alternar(category: string) {
    if(category == this.activo) {
      this.activo = ''
      this.getDiets()
    }else if(category == 'no-vegan'){
      this.activo = category
      this.getDietsCategory('No Vegana')
    }else if(category == 'vegan'){
      this.activo = category
      this.getDietsCategory('Vegana')
    }
  }
}
