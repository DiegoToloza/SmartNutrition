import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { Training } from 'src/app/models/training';
import { TrainingService } from 'src/app/services/training/training.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-training-create',
  templateUrl: './training-create.component.html',
  styleUrls: ['./training-create.component.sass'],
  providers: [TrainingService, UploadService]
})
export class TrainingCreateComponent implements OnInit {
  public title: string
  public status: string
  public training: Training
  public save_training: Training
  public filesToUpload: Array<File>
  public url: string

  constructor(
    private _trainingService: TrainingService,
    private _uploadService: UploadService
  ) { 
    this.title = 'Crear Ejercicio'
    this.status = ''
    this.training = new Training('','','','','','','')
    this.save_training = new Training('','','','','','','')
    this.filesToUpload = new Array()
    this.url = Global.url
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._trainingService.saveTraining(this.training).subscribe(
      response => {
        if(response.training){
          //subir la imagen
          this._uploadService.makeFileRequest(this.url + 'training/upload-image/' + response.training._id, [], this.filesToUpload, 'image')
          .then((result:any) => {
            if(result.training){
              this.save_training = result.training

              this.status = 'success'
              form.reset()
            }else{
              this._trainingService.deleteTraining(response.training._id).subscribe()
              this.status = 'failed'
            }
          })
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
