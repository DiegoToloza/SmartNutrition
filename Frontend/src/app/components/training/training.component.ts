import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.sass'],
  providers: [TrainingService, UploadService]
})
export class TrainingComponent implements OnInit {
  public url: string
  public training: Training
  public idVideo: string

  constructor(
    private _trainingService: TrainingService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.url = Global.url
    this.training = new Training('','','','','','','')
    this.idVideo = ''
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this.getTraining(id)

      const tag = document.createElement('script')
      tag.src = "https://www.youtube.com/iframe_api"
      document.body.appendChild(tag)
    })
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
          this._uploadService.deleteFileRequest(this.url + '/training/delete-image/' + response.training.image).subscribe()
        
          this._router.navigate(['/ejercicios'])
        }
      }
    )
  }

}
