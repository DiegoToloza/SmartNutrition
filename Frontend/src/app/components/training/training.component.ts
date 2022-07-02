import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass'],
  providers: [TrainingService, UploadService, AuthService]
})
export class TrainingComponent implements OnInit {
  public url: string
  public training: Training
  public idVideo: string
  public view: boolean

  constructor(
    private _trainingService: TrainingService,
    private _uploadService: UploadService,
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url + 'trainings/'
    this.training = new Training('','','','','','','')
    this.idVideo = ''
    this.view = false
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this.getTraining(id)

      const tag = document.createElement('script')
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag)
    })

    this._authService.isAdmin().subscribe(
      response => {
        if(response.result) {
          this.view = response.result
        }
      }
    )
  }

  getIdVideo() {
    var urlSplit = this.training.urlVideo.split('=')
    this.idVideo = urlSplit[1]
  }

  getTraining(id: string) {
    this._trainingService.getTraining(id).subscribe(
      response => {
        this.training = response.training
        
        this.getIdVideo()
      }
    )
  }

  deleteTraining(id: string) {
    this._trainingService.deleteTraining(id).subscribe(
      response => {
        if(response.training){
          // eliminar imagen del ejercicio
          this._uploadService.deleteFileRequest(this.url + 'delete-image/' + response.training.image).subscribe()
        
          this._router.navigate(['/ejercicios'])
        }
      }
    )
  }

  getTrainingImage() {
    return this.url + 'get-image/' + this.training.image
  }
}
