'use strict'
import User from '../models/User'

import jwt from 'jsonwebtoken'
import config from '../config'

const fs = require('fs')
const path = require('path')

export const getUsers = (req, res) => {
    res.json('get users')
    //No se alcanzo a realizar
}

export const getUserById = (req, res) => {
    /*const userId = req.params.userId

    if(userId == null) return res.status(404).send({message: 'El usuario no existe.'})

    User.findById(userId, (error, user) => {
        if (error) return res.status(500).send({message: 'Error al obtener el usuario'})
    
        if (!user) return res.status(404).send({message: 'El usuario no existe'})
        
        return res.status(200).send({_id: user._id, username: user.username, email: user.email, imagen: user.imagen})
    })*/
    res.status(200).send({message: 'xd'})
}

export const getCurrentUser = (req, res) => {
    const {userId} = req.query

    if(userId) {

    }else {
        try {
            const bToken = req.headers["authorization"]
            const token = bToken.split(' ')[1]
    
            if (!token) return res.status(403).send({ message: 'No token provided' })
    
            const decoded = jwt.verify(token, config.SECRET)
    
            User.findById(decoded.id, (error, user) => {
                if (error) return res.status(500).send({ message: 'Error al obtener el usuario' })
    
                if (!user) return res.status(404).send({ message: 'El usuario no existe' })
    
                return res.status(200).send({_id: user._id, username: user.username, email: user.email, image: user.image})
            })
        } catch (error) {
            return res.status(500).send({ message: 'Error al obtener el usuario' })
        }
    }
}

export const updateUserById = (req, res) => {
    res.json('update user by id')
    //No se alcanzo a realizar
}

export const deleteUserById = (req, res) => {
    res.json('delete user by id')
    //No se alcanzo a realizar
}

export const getImageFile = (req, res) => {
    const file = req.params.image
    const path_file = './src/uploads/users/' + file

    fs.exists(path_file, (exist) => {
        if (exist) {
            res.sendFile(path.resolve(path_file))
        } else {
            res.status(404).send({ message: 'Imagen not found' })
        }
    })
}