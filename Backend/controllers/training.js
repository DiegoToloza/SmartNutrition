'use strict'

var Training = require('../models/training')
var fs = require('fs')
var path = require('path')
const { exists } = require('../models/training')

var controller = {
    saveTraining: function(req, res){
        var training = new Training()
        var params = req.body

        training.name = params.name
        training.category = params.category
        training.difficulty = params.difficulty
        training.content = params.content
        training.urlVideo = params.urlVideo
        training.image = params.image

        training.save((error, trainingStored) => {
            if(error) return res.status(500).send({message: 'Error al guardar el ejercicio.'})

            if(!trainingStored) return res.status(404).send({message: 'No se ha podido guardar correctamente'})
        
            return res.status(200).send({training: trainingStored})
        })
    },

    getTraining: function(req, res){
        var trainingId = req.params.id

        if(trainingId == null) return res.status(404).send({message: 'El ejercicio no existe'})
    
        Training.findById(trainingId, (error, training) => {
            if(error) return res.status(500).send({message: 'Error al obtener el ejercicio'})
        
            if(!training) return res.status(404).send({message: 'El ejercicio no existe'})

            return res.status(200).send({training})
        })
    },

    getTrainings: function(req, res){
        
        Training.find({}).sort('name').exec((error, trainings) => {
            if(error) return res.status(500).send({message: 'Error al devolver los ejercicios'})

            if(!trainings) return res.status(404).send({message: 'No hay ejercicios que mostrar'})

            return res.status(200).send({trainings})
        })
    },

    getTrainingsCategory: function(req, res){
        var trainingCategory = req.params.category

        Training.find({category: trainingCategory}).sort('name').exec((error, trainings) => {
            if(error) return res.status(500).send({message: 'Error al devolver los ejercicios'})

            if(!trainings) return res.status(404).send({message: 'No hay ejercicios que mostrar'})

            return res.status(200).send({trainings})
        })
    },

    getTrainingsCategoryDifficulty: function(req, res){
        var trainingCategory = req.params.category
        var trainingDifficulty = req.params.difficulty

        Training.find({category: trainingCategory, difficulty: trainingDifficulty}).sort('name').exec((error, trainings) => {
            if(error) return res.status(500).send({message: 'Error al devolver los ejercicios'})

            if(!trainings) return res.status(404).send({message: 'No hay ejercicios que mostrar'})

            return res.status(200).send({trainings})
        })
    },

    updateTraining: function(req, res){
        var trainingId = req.params.id
        var update = req.body

        Training.findByIdAndUpdate(trainingId, update, {new: true}, (error, trainingUpdated) => {
            if(error) return res.status(500).send({message: 'Error al actualizar'})

            if(!trainingUpdated) return res.status(404).send({message: 'No existe el ejercicio'})
        
            return res.status(200).send({training: trainingUpdated})
        })
    },

    deleteTraining: function(req, res){
        var trainingId = req.params.id

        Training.findByIdAndRemove(trainingId, (error, trainingRemoved) => {
            if(error) return res.status(500).send({message: 'Error al eliminar'})

            if(!trainingRemoved) return res.status(404).send({message: 'No se puede eliminar'})
        
            return res.status(200).send({training: trainingRemoved})
        })
    },

    uploadImage: function(req, res){
        var trainingId = req.params.id
        var fileName = 'Imagen no subida...'

        if(req.files){
            var filePath = req.files.image.path
            var fileSplit = filePath.split('\\')
            var fileName = fileSplit[2]
            var extSplit = fileName.split('\.')
            var fileExt = extSplit[1]

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg'){
                Training.findByIdAndUpdate(trainingId, {image: fileName}, {new: true}, (error, trainingUpdated) => {
                    if(error) return res.status(500).send({message: 'Error al actualizar la imagen'})
                
                    if(!trainingUpdated) return res.status(404).send({message: 'Ejercicio no existe o no se puede guardar la imagen'})
                
                    return res.status(200).send({ training: trainingUpdated })
                })
            }else{
                fs.unlink(filePath, (error) => {
                    return res.status(200).send({message: 'La extension no es valida'})
                })
            }
        }else{
            return res.status(200).send({message: fileName})
        }
    },

    getImageFile: function(req, res){
        var file = req.params.image
        var path_file = './uploads/trainings/' + file

        fs.exists(path_file, (exists) => {
            if(exists){
                return res.sendFile(path.resolve(path_file))
            }else{
                return res.status(200).send({message: 'No existe la imagen...'})
            }
        })
    },

    deleteImage: function(req, res){
        var file = req.params.image
        var path_file = './uploads/trainings/' + file

        try {
            fs.unlinkSync(path_file)
            return res.status(200).send({message: 'Imagen eliminada correctamente'})
        }catch(err) {
            return res.status(200).send({message: 'No existe la imagen...'})
        }
    }
}

module.exports = controller