import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet.service';
import { Global } from 'src/app/services/global';


@Component({
  selector: 'app-diets',
  templateUrl: './diets.component.html',
  styleUrls: ['./diets.component.sass'],
  providers: [DietService]
})
export class DietsComponent implements OnInit {
  public diets: Array<Diet>
  public url: string
  public addDiet: boolean

  constructor(
    private _dietService: DietService,
    private _route: ActivatedRoute
  ) {
    this.diets = new Array()
    this.url = Global.url
    this.addDiet = true
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      if(params['category']){
        let category = params['category']
        category = category.replace('-', ' ')
        category = category.replace(/(?:^|\s)\S/g, (res:any) => { return res.toUpperCase()})
        
        this.getDietsCategory(category)
        this.addDiet = false
      }else{
        this.getDiets()
      }
    })
  }

  getDiets(){
    this._dietService.getDiets().subscribe(
      response => {
        if(response.diets){
          this.diets = response.diets
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }

  getDietsCategory(category: string){
    this._dietService.getDietsCategory(category).subscribe(
      response => {
        if(response.diets){
          this.diets = response.diets
        }
      },
      error => {
        console.log(<any>error)
      }
    )
  }
}
