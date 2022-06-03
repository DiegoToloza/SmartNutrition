import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass'],
  providers: [TrainingService]
})
export class TrainingsComponent implements OnInit {
  public trainings: Array<Training>
  public url: string
  public addTraining: boolean

  constructor(
    private _TrainingService: TrainingService,
    private _route: ActivatedRoute
  ) { 
    this.trainings = new Array()
    this.url = Global.url
    this.addTraining = false
   }

  ngOnInit(): void {
    //crear las rutas relativas como en las dietas
    this._route.params.subscribe(params => {
      if(params['category'] && params['difficulty']){
        let category = params['category']
        let difficulty = params['difficulty']

        category = category.replace(/(?:^|\s)\S/g, (res:any) => { return res.toUpperCase()})
        difficulty = difficulty.replace(/(?:^|\s)\S/g, (res:any) => { return res.toUpperCase()})

        this.getTrainingsCategoryDifficulty(category, difficulty)
      }else if(params['category']){
        let category = params['category']
        category = category.replace(/(?:^|\s)\S/g, (res:any) => { return res.toUpperCase()})

        this.getTrainingsCategory(category)
      }else{
        this.getTrainings()
        this.addTraining = true
      }
    })
  }

  getTrainings(){
    this._TrainingService.getTrainings().subscribe(
      response => {
        if(response.trainings){
          this.trainings = response.trainings
        }
      }
    )
  }

  getTrainingsCategory(category: string){
    this._TrainingService.getTrainingsCategory(category).subscribe(
      response => {
        if(response.trainings){
          this.trainings = response.trainings
        }
      }
    )
  }

  getTrainingsCategoryDifficulty(category: string, difficulty: string){
    this._TrainingService.getTrainingsCategoryDifficulty(category, difficulty).subscribe(
      response => {
        if(response.trainings){
          this.trainings = response.trainings
        }
      }
    )
  }
}
