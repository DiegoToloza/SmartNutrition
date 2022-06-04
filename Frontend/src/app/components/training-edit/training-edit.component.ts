import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from '@angular/forms';

import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-training-edit',
  templateUrl: './training-edit.component.html',
  styleUrls: ['./training-edit.component.sass'],
  providers: [TrainingService, UploadService]
})
export class TrainingEditComponent implements OnInit {
  public title: string
  public status: string
  public pre_training: Training
  public training: Training
  public save_training: Training
  public filesToUpload: Array<File>
  public url: string

  constructor(
    private _trainingService: TrainingService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title = 'Editar Ejercicio'
    this.status = ''
    this.pre_training = new Training('','','','','','','')
    this.training = new Training('','','','','','','')
    this.save_training = new Training('','','','','','','')
    this.filesToUpload = new Array()
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this.getTraining(id)
    })
  }

  getTraining(id: string) {
    this._trainingService.getTraining(id).subscribe(
      response => {
        this.training = response.training
        this.pre_training = response.training
      }
    )
  }

  onSubmit(form: any) {
    this._trainingService.updateTraining(this.training).subscribe(
      response => {
        if(response.training){
          //subir la imagen
          if(this.filesToUpload.length){
            this._uploadService.makeFileRequest(this.url + 'training/upload-image/' + response.training._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              if(result.training){
                //eliminar imagen anterior
                this._uploadService.deleteFileRequest(this.url + '/training/delete-image/' + this.pre_training.image).subscribe()
              
                this.save_training = result.training
                this.status = 'success'
              }else{
                this._trainingService.updateTraining(this.pre_training).subscribe()
                this.status = 'failed'
              }
            })
          }else{
            this.save_training = response.training
            this.status = 'success'
          }
        }else{
          this.status = 'failed'
        }

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth'
        })
      }
    )
  }

  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files
  }

}
