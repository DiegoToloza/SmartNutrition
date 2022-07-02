import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet/diet.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.sass'],
  providers: [DietService, UploadService, AuthService]
})
export class DietComponent implements OnInit {
  public url: string
  public view: boolean
  public diet: Diet

  constructor(
    private _dietService: DietService,
    private _uploadService: UploadService,
    private _authService: AuthService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url + 'diets/'
    this.diet = new Diet('', '', '', '', '', '')
    this.view = false
  }

  ngOnInit(): void {
    this._route.params.subscribe(params => {
      let id = params['id']

      this.getDiet(id)
    })
    
    this._authService.isAdmin().subscribe(
      response => {
        if(response.result) {
          this.view = response.result
        }
      },
      error => {
        this.view = false
      }
    )
  }

  getDiet(id: string) {
    this._dietService.getDiet(id).subscribe(
      response => {
        this.diet = response.diet
      }
    )
  }

  deleteDiet(id: string) {
    this._dietService.deleteDiet(id).subscribe(
      response => {
        if(response.diet){
          // eliminar imagen de la dieta
          this._uploadService.deleteFileRequest(this.url + 'delete-image/' + response.diet.image).subscribe()

          this._router.navigate(['/dietas'])
        }
      }
    )
  }

  getDietImage() {
    return this.url + 'get-image/' + this.diet.image
  }
}