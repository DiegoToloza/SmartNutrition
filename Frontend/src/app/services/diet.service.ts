import { Injectable } from "@angular/core";
import { Diet } from "../models/diet";

@Injectable()
export class DietService {
    private allDiets: Array<Diet>
    private dietsNoVegans: Array<Diet>
    private dietsVegans: Array<Diet>

    constructor() {
        this.dietsNoVegans = [
            new Diet('1234','Caballo', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.'),
            new Diet('1254', 'lorem ipsum', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.'),
            new Diet('1546', 'lorem ipsum', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.'),
            new Diet('4567', 'lorem ipsum', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.'),
            new Diet('6542', 'lorem ipsum', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.')
        ]

        this.dietsVegans = [
            new Diet('7812', 'Vegana 1', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.'),
            new Diet('1232', 'Vegana 2', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.'),
            new Diet('5647', 'Vegana 3', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', 'texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo texto de ejemplo.')
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