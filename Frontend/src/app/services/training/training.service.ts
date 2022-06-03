import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { Training } from 'src/app/models/training';
import { Global } from '../global';

@Injectable({
    providedIn: 'root'
})
export class TrainingService {
    public url: string

    constructor(
        private _http: HttpClient
    ) {
        this.url = Global.url
    }

    saveTraining(training: Training): Observable<any> {
        let params = JSON.stringify(training)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.post(this.url + 'save-training', params, {headers: headers})
    }

    getTraining(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'training/' + id, { headers: headers })
    }

    getTrainings(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'trainings', { headers: headers })
    }

    getTrainingsCategory(category: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'trainings/' + category, { headers: headers })
    }

    getTrainingsCategoryDifficulty(category: string, difficulty: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.get(this.url + 'trainings/' + category + '/' + difficulty, { headers: headers })
    }

    deleteTraining(id: string): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.delete(this.url + 'training/' + id, { headers: headers })
    }

    updateTraining(training: Training): Observable<any> {
        let params = JSON.stringify(training)
        let headers = new HttpHeaders().set('Content-Type', 'application/json')

        return this._http.put(this.url + 'training/' + training._id, params, { headers: headers })
    }
}