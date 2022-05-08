import { Injectable } from "@angular/core";
import { Diet } from "../models/diet";
import { User } from "../models/user";

@Injectable()
export class DietService {
    private allDiets: Array<Diet>
    private dietsNoVegans: Array<Diet>
    private dietsVegans: Array<Diet>

    constructor() {
        this.dietsNoVegans = [
            new Diet('1234','Caballo', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('1254', 'Caballo 2', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('1546', 'Caballo 3', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('4567', 'Caballo 4', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('6542', 'Caballo 5', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', '')
        ]

        this.dietsVegans = [
            new Diet('7812', 'Vegana', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', ''),
            new Diet('1232', 'Vegana', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', ''),
            new Diet('5647', 'Vegana', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', '')
        ]

        this.allDiets = new Array()
    }

    getAllDiets(): Array<Diet> {
        this.allDiets = this.dietsNoVegans.concat(this.dietsVegans)
        return this.allDiets
    }

    getDietsNoVegans(): Array<Diet> {
        return this.dietsNoVegans
    }

    getDietsVegans(): Array<Diet> {
        return this.dietsVegans
    }

    //Con User

    getMyDiets(user: any): Array<Diet> {
        
        if(user == null){
            return new Array()
        } else {
            return user.diets
        }
    }
}