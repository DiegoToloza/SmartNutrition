import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { Diet } from 'src/app/models/diet';
import { DietService } from 'src/app/services/diet/diet.service';
import { UploadService } from 'src/app/services/upload/upload.service';
import { Global } from 'src/app/services/global';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.sass'],
  providers: [DietService, UploadService]
})
export class DietComponent implements OnInit {
  public url: string
  public diet: Diet

  constructor(
    private _dietService: DietService,
    private _uploadService: UploadService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {
    this.url = Global.url
    this.diet = new Diet('', '', '', '', '', '')
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
      }
    )
  }

  deleteDiet(id: string) {
    this._dietService.deleteDiet(id).subscribe(
      response => {
        this._uploadService.deleteFileRequest(this.url + 'diets/delete-image/' + response.image).subscribe()

        this._router.navigate(['/dietas'])
      }
    )
  }

}