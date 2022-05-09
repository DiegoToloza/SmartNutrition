import { Injectable } from "@angular/core";
import { Training } from "../models/training";

@Injectable()
export class TrainingService {
    private allTrainigs: Array<Training>

    constructor() {
        this.allTrainigs = [
            new Training('t12345', 'Push Up', '../assets/img/Trainings/Ejercicio1.jpg', 'Pecho', 'Principiante', '1. Place your hands firmly on the ground, directly under shoulders.\n2. Flatten your back so your entire body is straight and slowly lower your body.\n3. Flatten your back so your entire body is straight and slowly lower your body.\n4. Exhale as you push back to the starting position.'),
            new Training('t4652', 'Pecho', '../assets/img/Trainings/Ejercicio1.jpg', 'Pecho', 'Avanzado', ''),
            new Training('t4456', 'Espalda', '../assets/img/Trainings/Ejercicio1.jpg', 'Espalda', 'Principiante', ''),
            new Training('t4654', 'Pecho', '../assets/img/Trainings/Ejercicio1.jpg', 'Pecho', 'Avanzado', ''),
            new Training('t46546', 'Espalda', '../assets/img/Trainings/Ejercicio1.jpg', 'Espalda', 'Avanzado', ''),
            new Training('t8564', 'Espalda', '../assets/img/Trainings/Ejercicio1.jpg', 'Espalda', 'Intermedio', ''),
            new Training('t946541', 'Espalda', '../assets/img/Trainings/Ejercicio1.jpg', 'Espalda', 'Avanzado', ''),
            new Training('t1654', 'Brazos', '../assets/img/Trainings/Ejercicio1.jpg', 'Brazos', 'Intermedio', ''),
            new Training('t78965', 'Piernas', '../assets/img/Trainings/Ejercicio1.jpg', 'Piernas', 'Intermedio', ''),
            new Training('t45682', 'Piernas', '../assets/img/Trainings/Ejercicio1.jpg', 'Piernas', 'Principiante', ''),
            new Training('t658247', 'Piernas', '../assets/img/Trainings/Ejercicio1.jpg', 'Piernas', 'Intermedio', '')
        ]
    }

    getAllTrainings() {
        return this.allTrainigs
    }

    getTrainings(category: string, difficulty: string): Array<Training> {
        var searchTrainings = new Array()
        this.allTrainigs.forEach(function(training){
            if(training.category == category && training.difficulty == difficulty){
                searchTrainings.push(training)
            }
        })
        return searchTrainings
    }
}