import { Component, OnInit } from '@angular/core';

import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training.service';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass'],
  providers: [TrainingService]
})
export class TrainingsComponent implements OnInit {
  public trainings: Array<Training>
  public trainingActive: Training

  constructor(
    private _TrainingService: TrainingService
  ) { 
    this.trainings = new Array()
    this.trainingActive = new Training()
   }

  ngOnInit(): void {
    this.getAllTrainings()
  }

  getAllTrainings() {
    this.trainings = this._TrainingService.getAllTrainings()
  }

  getTrainings(category: string, difficulty: string) {
    this.trainingActive = new Training
    this.trainings = this._TrainingService.getTrainings(category, difficulty)
  }

  displayTraining(indice: any) {
    this.trainingActive = this.trainings[indice]
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }

  disableDisplayTraining() {
    this.trainingActive = new Training()
  }

}
