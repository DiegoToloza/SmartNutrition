'use strict'
import Training from "../models/Training";

const fs = require('fs')
const path = require('path')

export const createTraining = (req, res) => {
    const { name, category, difficulty, content, urlVideo, image } = req.body

    const training = new Training({ name, category, difficulty, content, urlVideo, image })
    training.save((error, trainingStored) => {
        if (error) return res.status(500).send({ message: 'Error al guardar el ejercicio.' })

        if (!trainingStored) return res.status(404).send({ message: 'No se ha podido guardar correctamente' })

        return res.status(200).send({ training: trainingStored })
    })
}

export const getTrainings = (req, res) => {
    const { category, difficulty } = req.query

    if (category && difficulty) {
        Training.find({ category: category, difficulty: difficulty }).sort('name').exec((error, trainings) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los ejercicios' })

            if (!trainings) return res.status(404).send({ message: 'No hay ejercicios que mostrar' })

            return res.status(200).send({ trainings })
        })
    } else if (category) {
        Training.find({ category: category }).sort('name').exec((error, trainings) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los ejercicios' })

            if (!trainings) return res.status(404).send({ message: 'No hay ejercicios que mostrar' })

            return res.status(200).send({ trainings })
        })
    } else if (difficulty) {
        Training.find({ difficulty: difficulty }).sort('name').exec((error, trainings) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los ejercicios' })

            if (!trainings) return res.status(404).send({ message: 'No hay ejercicios que mostrar' })

            return res.status(200).send({ trainings })
        })
    } else {
        Training.find({}).sort('name').exec((error, trainings) => {
            if (error) return res.status(500).send({ message: 'Error al devolver los ejercicios' })

            if (!trainings) return res.status(404).send({ message: 'No hay ejercicios que mostrar' })

            return res.status(200).send({ trainings })
        })
    }
}

export const getTrainingById = (req, res) => {
    const trainingId = req.params.trainingId

    if (trainingId == null) return res.status(404).send({ message: 'El ejercicio no existe' })

    Training.findById(trainingId, (error, training) => {
        if (error) return res.status(500).send({ message: 'Error al obtener el ejercicio' })

        if (!training) return res.status(404).send({ message: 'El ejercicio no existe' })

        return res.status(200).send({ training })
    })
}

export const updateTrainingById = (req, res) => {
    const trainingId = req.params.trainingId
    const update = req.body

    Training.findByIdAndUpdate(trainingId, update, { new: true }, (error, trainingUpdated) => {
        if (error) return res.status(500).send({ message: 'Error al actualizar' })

        if (!trainingUpdated) return res.status(404).send({ message: 'No existe el ejercicio' })

        return res.status(200).send({ training: trainingUpdated })
    })
}

export const deleteTrainingById = (req, res) => {
    const trainingId = req.params.trainingId

    Training.findByIdAndRemove(trainingId, (error, trainingRemoved) => {
        if (error) return res.status(500).send({ message: 'Error al eliminar' })

        if (!trainingRemoved) return res.status(404).send({ message: 'No se puede eliminar' })

        return res.status(200).send({ training: trainingRemoved })
    })
}

export const uploadImage = (req, res) => {
    const trainingId = req.params.trainingId
    const filename = 'Imagen no subida...'

    if (req.files) {
        const filePath = req.files.image.path
        const fileSplit = filePath.split('\\')
        const fileName = fileSplit[3]
        const extSplit = fileName.split('\.')
        const fileExt = extSplit[1]

        if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg') {
            Training.findByIdAndUpdate(trainingId, { image: fileName }, { new: true }, (error, trainingUpdated) => {
                if (error) return res.status(500).send({ message: 'Error al actualizar la imagen' })

                if (!trainingUpdated) return res.status(404).send({ message: 'Ejercicio no existe o no se puede guardar la imagen' })

                return res.status(200).send({ training: trainingUpdated })
            })
        } else {
            fs.unlink(filePath, (error) => {
                return res.status(200).send({ message: 'La extension no es valida' })
            })
        }
    } else {
        return res.status(200).send({ message: filename })
    }
}

export const getImageFile = (req, res) => {
    const file = req.params.image
    const path_file = './src/uploads/trainings/' + file

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
        const path_file = './src/uploads/trainings/' + file

        try {
            fs.unlinkSync(path_file)
            res.status(200).send({ message: 'Image deleted' })
        } catch (err) {
            res.status(404).send({ message: 'Image not found' })
        }
    }
}