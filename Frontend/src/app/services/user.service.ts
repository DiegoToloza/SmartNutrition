import { Injectable } from "@angular/core";

import { User } from "../models/user";

@Injectable()
export class UserService {
    private user: User = new User()

    constructor() {
        
    }

    getUser() {
        var userJS = JSON.parse(String(localStorage.getItem('user')))
        this.user = new User(userJS.name, userJS.email, userJS.img, userJS.password)
        
        return this.user
    }

    userExist() {
        if(localStorage.getItem('user') != null) {
            return true
        }else {
            return false
        }
    }

    logOut() {
        this.user = new User()
        localStorage.removeItem('user')

        
    }

    logIn() {
        var userJS = {
            name: 'Ununoctio',
            email: 'ununoctio@gmail.com',
            img: '../assets/imagenes de prueba/Users/icono.png',
            password: 'admin',
            diets: [{}],
            trainings: [{}]
        }
        localStorage.setItem('user', JSON.stringify(userJS))
    }
}