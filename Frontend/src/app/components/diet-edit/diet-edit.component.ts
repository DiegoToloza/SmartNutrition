import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Form } from '@angular/forms';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet/diet.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-diet-edit',
  templateUrl: './diet-edit.component.html',
  styleUrls: ['./diet-edit.component.sass'],
  providers: [DietService, UploadService]
})
export class DietEditComponent implements OnInit {
  public title: string
  public status: string
  public pre_diet: Diet
  public diet: Diet
  public save_diet: Diet
  public filesToUpload: Array<File>
  public url: string

  constructor(
    private _dietService: DietService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.title = 'Editar Dieta'
    this.status = ''
    this.pre_diet = new Diet('','','','','','')
    this.diet = new Diet('','','','','','')
    this.save_diet = new Diet('','','','','','')
    this.filesToUpload = new Array()
    this.url = Global.url
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this.getDiet(id)
    })
  }

  getDiet(id: string) {
    this._dietService.getDiet(id).subscribe(
      response => {
        this.diet = response
        this.pre_diet = response
      }
    )
  }

  onSubmit(form: any) {
    this._dietService.updateDiet(this.diet).subscribe(
      response => {
        if(response){
          //subir la imagen
          if(this.filesToUpload.length){
            this._uploadService.makeFileRequest(this.url + 'diets/upload-image/' + response._id, [], this.filesToUpload, 'image')
            .then((result: any) => {
              if(result){
                //eliminar imagen anterior
                this._uploadService.deleteFileRequest(this.url + 'diets/delete-image/' + this.pre_diet.image).subscribe()

                this.save_diet = result.diet
                this.status = 'success'
              }else{
                this._dietService.updateDiet(this.pre_diet).subscribe()
                this.status = 'failed'
              }
            })
          }else{
            this.save_diet = response
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
