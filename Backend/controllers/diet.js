'use strict'

var Diet = require('../models/diet')
var fs = require('fs')
var path = require('path')
const { exists } = require('../models/diet')

var controller = {
    saveDiet: function(req, res){
        var diet = new Diet()
        var params = req.body

        diet.name = params.name
        diet.description = params.description
        diet.category = params.category
        diet.content = params.content
        diet.image = null

        diet.save((error, dietStored) => {
            if(error) return res.status(500).send({message: 'Error al guardar la dieta'})

            if(!dietStored) return res.status(404).send({message: 'No se ha podido guardar correctamente'})
        
            return res.status(200).send({diet: dietStored})
        })
    },

    getDiet: function(req, res){
        var dietId = req.params.id

        if(dietId == null) return res.status(404).send({message: 'La dieta no existe'})
    
        Diet.findById(dietId, (error, diet) => {
            if(error) return res.status(500).send({message: 'Error al obtener la dieta'})
        
            if(!diet) return res.status(404).send({message: 'La dieta no existe'})
        
            return res.status(200).send({diet})
        })
    },

    getDiets: function(req, res){
        
        Diet.find({}).sort('name').exec((error, diets) => {
            if(error) return res.status(500).send({message: 'Error al devolver las dietas'})
        
            if(!diets) return res.status(404).send({message: 'No hay dietas que mostrar'})

            return res.status(200).send({diets})
        })
    },

    getDietsCategory: function(req, res){
        var dietCategory = req.params.category

        Diet.find({category: dietCategory}).sort('name').exec((error, diets) => {
            if(error) return res.status(500).send({message: 'Error al devolver las dietas'})
        
            if(!diets) return res.status(404).send({message: 'No hay dietas que mostrar'})

            return res.status(200).send({diets})
        })
    },

    updateDiet: function(req, res){
        var dietId = req.params.id
        var update = req.body

        Diet.findByIdAndUpdate(dietId, update, {new: true}, (error, dietUpdated) => {
            if(error) return res.status(500).send({message: 'Error al actualizar'})

            if(!dietUpdated) return res.status(404).send({message: 'No existe la dieta'})
        
            return res.status(200).send({diet: dietUpdated})
        })
    },

    deleteDiet: function(req, res){
        var dietId = req.params.id

        Diet.findByIdAndRemove(dietId, (error, dietRemoved) => {
            if(error) return res.status(500).send({message: 'Error al eliminar'})

            if(!dietRemoved) return res.status(404).send({message: 'No se puede eliminar'})
        
            return res.status(200).send({diet: dietRemoved})
        })
    },

    uploadImage: function(req, res){
        var dietId = req.params.id
        var fileName = 'Imagen no subida...'

        if(req.files){
            var filePath = req.files.image.path
            var fileSplit = filePath.split('\\')
            var fileName = fileSplit[2]
            var extSplit = fileName.split('\.')
            var fileExt = extSplit[1]

            if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg'){
                Diet.findByIdAndUpdate(dietId, {image: fileName}, {new: true}, (error, dietUpdated) => {
                    if(error) return res.status(500).send({message: 'Error al actualizar la imagen'})
                
                    if(!dietUpdated) return res.status(404).send({message: 'Dieta no existe o no se puede guardar la imagen'})
                
                    return res.status(200).send({ diet: dietUpdated })
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
        var path_file = './uploads/diets/' + file

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
        var path_file = './uploads/diets/' + file

        try {
            fs.unlinkSync(path_file)
            return res.status(200).send({message: 'Imagen eliminada correctament'})
        }catch(err) {
            return res.status(200).send({message: 'No existe la imagen...'})
        }
    }
}

module.exports = controller