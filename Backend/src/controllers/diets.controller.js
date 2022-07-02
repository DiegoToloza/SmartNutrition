'use strict'
import Diet from '../models/Diet'

const fs = require('fs')
const path = require('path')

export const createDiet = (req, res) => {
    const { name, description, category, content, image } = req.body

    const diet = new Diet({ name, description, category, content, image })
    diet.save((error, dietStored) => {
        if (error) return res.status(500).send({ message: 'Error al guardar la dieta' })

        if (!dietStored) return res.status(404).send({ message: 'No se ha podido guardar correctamente' })

        return res.status(200).send({ diet: dietStored })
    })
}

export const getDiets = (req, res) => {
    const { category } = req.query
    if (category) {
        Diet.find({ category: category }).sort('name').exec((error, diets) => {
            if (error) return res.status(500).send({ message: 'Error al devolver las dietas' })

            if (!diets) return res.status(404).send({ message: 'No hay dietas que mostrar' })

            return res.status(200).send({ diets })
        })
    } else {
        Diet.find({}).sort('name').exec((error, diets) => {
            if (error) return res.status(500).send({ message: 'Error al devolver las dietas' })

            if (!diets) return res.status(404).send({ message: 'No hay dietas que mostrar' })

            return res.status(200).send({ diets })
        })
    }
}

export const getDietById = (req, res) => {
    const dietId = req.params.dietId

    if (dietId == null) return res.status(404).send({ message: 'La dieta no existe' })

    Diet.findById(dietId, (error, diet) => {
        if (error) return res.status(500).send({ message: 'Error al obtener la dieta' })

        if (!diet) return res.status(404).send({ message: 'La dieta no existe' })

        return res.status(200).send({ diet })
    })
}

export const updateDietById = (req, res) => {
    const dietId = req.params.dietId
    const update = req.body

    Diet.findByIdAndUpdate(dietId, update, { new: true }, (error, dietUpdated) => {
        if (error) return res.status(500).send({ message: 'Error al actualizar' })

        if (!dietUpdated) return res.status(404).send({ message: 'No existe la dieta' })

        return res.status(200).send({ diet: dietUpdated })
    })
}

export const deleteDietById = (req, res) => {
    const dietId = req.params.dietId

    Diet.findByIdAndRemove(dietId, (error, dietRemoved) => {
        if (error) return res.status(500).send({ message: 'Error al eliminar' })

        if (!dietRemoved) return res.status(404).send({ message: 'No se puede eliminar' })

        return res.status(200).send({ diet: dietRemoved })
    })
}

export const uploadImage = (req, res) => {
    const dietId = req.params.dietId
    const filename = 'image not found'

    if (req.files) {
        const filePath = req.files.image.path
        const fileSplit = filePath.split('\\')
        const fileName = fileSplit[3]
        const extSplit = fileName.split('\.')
        const fileExt = extSplit[1]

        if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg') {
            Diet.findByIdAndUpdate(dietId, { image: fileName }, { new: true }, (error, updateDiet) => {
                if (error) res.status(500).send({ message: 'Update error' })

                if (!updateDiet) res.status(404).send({ message: 'Diet not found' })

                res.status(200).send({ diet: updateDiet })
            })
        } else {
            fs.unlink(filePath, (error) => {
                res.status(200).send({ message: 'extension not valid' })
            })
        }
    } else {
        res.status(200).send({ message: filename })
    }
}

export const getImageFile = (req, res) => {
    const file = req.params.image
    const path_file = './src/uploads/diets/' + file

    fs.exists(path_file, (exist) => {
        if (exist) {
            res.sendFile(path.resolve(path_file))
        } else {
            res.status(404).send({ message: 'Image not found' })
        }
    })
}

export const deleteImageFile = (req, res) => {
    const file = req.params.image
    if (file == 'default.jpg') {
        res.status(200).send({ message: 'Image deleted' })
    } else {
        const path_file = './src/uploads/diets/' + file

        try {
            fs.unlinkSync(path_file)
            res.status(200).send({ message: 'Image deleted' })
        } catch (err) {
            res.status(404).send({ message: 'Image not found' })
        }
    }
}