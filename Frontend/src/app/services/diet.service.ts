import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from "rxjs";

import { Diet } from "../models/diet";
import { Global } from "./global";

@Injectable()
export class DietService {
    public url: string

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url
    }

    saveDiet(diet: Diet): Observable <any>{
        let params = JSON.stringify(diet)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + 'save-diet', params, {headers: headers})
    }
    
    getDiet(id: string): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'diet/' + id, {headers: headers})
    }

    getDiets(): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'diets', {headers: headers})
    }

    getDietsCategory(category: string): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'diets/' + category, {headers: headers})
    }

    deleteDiet(id: string): Observable <any>{
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.delete(this.url + 'diet/' + id, {headers: headers})
    }

    updateDiet(diet: Diet): Observable <any>{
        let params = JSON.stringify(diet)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.put(this.url + 'diet/' + diet._id, params, {headers: headers})
    }
}