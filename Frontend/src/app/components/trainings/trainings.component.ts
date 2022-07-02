import { Component, OnInit } from '@angular/core';

import { Training } from 'src/app/models/training';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TrainingService } from 'src/app/services/training/training.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.sass'],
  providers: [TrainingService, AuthService]
})
export class TrainingsComponent implements OnInit {
  public trainings: Array<Training>
  public url: string
  public view: boolean

  constructor(
    private _TrainingService: TrainingService,
    private _authService: AuthService
  ) {
    this.trainings = new Array()
    this.url = Global.url + 'trainings/'
    this.view = false
  }

  ngOnInit(): void {
    this.getTrainings()

    this._authService.isAdmin().subscribe(
      response => {
        if(response.result) {
          this.view = response.result
        }
      }
    )
  }

  getTrainings() {
    this._TrainingService.getTrainings().subscribe(
      response => {
        if (response.trainings) {
          this.trainings = response.trainings
        }
      }
    )
  }

  getTrainingsCategory(category: string) {
    this._TrainingService.getTrainingsCategory(category).subscribe(
      response => {
        if (response.trainings) {
          this.trainings = response.trainings
        }
      }
    )
  }

  getTrainingsCategoryDifficulty(category: string, difficulty: string) {
    this._TrainingService.getTrainingsCategoryDifficulty(category, difficulty).subscribe(
      response => {
        if (response.trainings) {
          this.trainings = response.trainings
        }
      }
    )
  }

  getTrainingImage(training: Training) {
    return this.url + 'get-image/' + training.image
  }

  updateCategoryDifficulty(category: string, difficulty: string) {
    if (category == '' && difficulty == '') {
      this.getTrainings()
    } else if (difficulty == '') {
      this.getTrainingsCategory(category)
    } else {
      this.getTrainingsCategoryDifficulty(category, difficulty)
    }
  }
}
