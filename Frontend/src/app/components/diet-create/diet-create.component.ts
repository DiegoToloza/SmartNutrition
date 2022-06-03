import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet/diet.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-diet-create',
  templateUrl: './diet-create.component.html',
  styleUrls: ['./diet-create.component.sass'],
  providers: [DietService, UploadService]
})
export class DietCreateComponent implements OnInit {
  public title: string
  public status: string
  public diet: Diet
  public save_diet: Diet
  public filesToUpload: Array<File>
  public url: string

  constructor(
    private _dietService: DietService,
    private _uploadService: UploadService
  ) {
    this.title = 'Crear Dieta'
    this.status = ''
    this.diet = new Diet('','','','','','')
    this.save_diet = new Diet('','','','','','')
    this.filesToUpload = new Array()
    this.url = Global.url
  }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    this._dietService.saveDiet(this.diet).subscribe(
      response => {
        if(response.diet){
          //subir la imagen
          this._uploadService.makeFileRequest(this.url + 'diet/upload-image/' + response.diet._id, [], this.filesToUpload, 'image')
          .then((result:any) => {
            this.save_diet = result.diet

            this.status = 'success'
            form.reset()
          })
        }else{
          this.status = 'failed'
        }
      }
    )
  }
  
  fileChangeEvent(fileInput: any){
    this.filesToUpload = <Array<File>> fileInput.target.files
  }

}
