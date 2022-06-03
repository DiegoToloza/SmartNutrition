import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  public url: string

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url
  }

  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string) {
    return new Promise(function (resolve, reject) {
      var formData: any = new FormData()
      var xhr = new XMLHttpRequest()

      for (var i = 0; i < files.length; i++) {
        formData.append(name, files[i], files[i].name)
      }

      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (xhr.status == 200) {
            resolve(JSON.parse(xhr.response))
          } else {
            reject(xhr.response)
          }
        }
      }

      xhr.open('POST', url, true)
      xhr.send(formData)
    })
  }

  deleteFileRequest(url: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(url, { headers: headers })
  }
}