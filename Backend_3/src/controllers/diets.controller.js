'use strict'
import Diet from '../models/Diet'

const fs = require('fs')
const path = require('path')

export const createDiet = async (req, res) => {
    const { name, description, category, content, image } = req.body

    const newDiet = new Diet({ name, description, category, content, image })
    const dietSaved = await newDiet.save()

    res.status(201).json(dietSaved)
}

export const getDiets = async (req, res) => {
    const { category } = req.query
    if (category) {
        const diets = await Diet.find({ category: category }).sort('name')
        res.status(200).json(diets)
    } else {
        const diets = await Diet.find({}).sort('name')
        res.status(200).json(diets)
    }
}

export const getDietById = async (req, res) => {
    const diet = await Diet.findById(req.params.dietId)

    res.status(200).json(diet)
}

export const updateDietById = async (req, res) => {
    const updateDiet = await Diet.findByIdAndUpdate(req.params.dietId, req.body, {
        new: true
    })

    res.status(200).json(updateDiet)
}

export const deleteDietById = async (req, res) => {
    const deleteDiet = await Diet.findByIdAndDelete(req.params.dietId)

    res.status(200).json(deleteDiet)
}

export const uploadImage = (req, res) => {
    const dietId = req.params.dietId
    const filename = 'image not found'

    if (req.files) {
        var filePath = req.files.image.path
        var fileSplit = filePath.split('\\')
        var fileName = fileSplit[3]
        var extSplit = fileName.split('\.')
        var fileExt = extSplit[1]

        if (fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg') {
            Diet.findByIdAndUpdate(dietId, { image: fileName }, { new: true }, (error, updateDiet) => {
                if(error) res.status(500).send({message: 'Update error'})

                if(!updateDiet) res.status(404).send({message: 'Diet not found'})

                res.status(200).send({diet: updateDiet})
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
        if(exist){
            res.sendFile(path.resolve(path_file))
        }else{
            res.status(404).send({message: 'Image not found'})
        }
    })
}

export const deleteImageFile = (req, res) => {
    const file = req.params.image
    const path_file = './src/uploads/diets/' + file

    try {
        fs.unlinkSync(path_file)
        res.status(200).send({message: 'Image deleted'})
    } catch (err) {
        res.status(404).send({message: 'Image not found'})
    }
}