import { Injectable } from "@angular/core";
import { Diet } from "../models/diet";

@Injectable()
export class DietService{
    private allDiets: Array<Diet> 
    private dietsNoVegans: Array<Diet>
    private dietsVegans: Array<Diet>
    private myDiets: Array<Diet>

    constructor(){
        this.dietsNoVegans = [
            new Diet('Caballo', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('Caballo 2', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('Caballo 3', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('Caballo 4', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', ''),
            new Diet('Caballo 5', 'A pura agua y paja', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'no-vegana', '')
        ]

        this.dietsVegans = [
            new Diet('Vegana', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', ''),
            new Diet('Vegana', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', ''),
            new Diet('Vegana', 'Sin carne', '../../assets/imagenes de prueba/Diets/cetogenica.jpg', 'vegana', '')
        ]

        this.myDiets = new Array()
        this.allDiets = new Array()
    }

    getAllDiets(): Array<Diet>{
        this.allDiets = this.dietsNoVegans.concat(this.dietsVegans)
        return this.allDiets
    }

    getDietsNoVegans(): Array<Diet>{
        return this.dietsNoVegans
    }

    getDietsVegans(): Array<Diet>{
        return this.dietsVegans
    }

    getMyDiets(): Array<Diet>{
        return this.myDiets
    }
}