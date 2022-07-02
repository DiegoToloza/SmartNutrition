import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Diet } from 'src/app/models/diet';
import { Global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  public url: string

  constructor(
    private _http: HttpClient
  ) {
    this.url = Global.url + 'diets/'
  }

  saveDiet(diet: Diet): Observable<any> {
    let params = JSON.stringify(diet)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.post(this.url, params, { headers: headers })
  }

  getDiet(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url + id, { headers: headers })
  }

  getDiets(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url, { headers: headers })
  }

  getDietsCategory(category: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.get(this.url + '?category=' + category, { headers: headers })
  }

  deleteDiet(id: string): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.delete(this.url + id, { headers: headers })
  }

  updateDiet(diet: Diet): Observable<any> {
    let params = JSON.stringify(diet)
    let headers = new HttpHeaders().set('Content-Type', 'application/json')

    return this._http.put(this.url + diet._id, params, { headers: headers })
  }
}
