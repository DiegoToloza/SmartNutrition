'use strict'

var express = require('express')
var TrainingController = require('../controllers/training')

var router = express.Router()

var multipart = require('connect-multiparty')
var multipartMiddleware = multipart({ uploadDir: './uploads/trainings'})

router.post('/save-training', TrainingController.saveTraining)
router.get('/training/:id?', TrainingController.getTraining)
router.get('/trainings', TrainingController.getTrainings)
router.get('/trainings/:category', TrainingController.getTrainingsCategory)
router.get('/trainings/:category/:difficulty', TrainingController.getTrainingsCategoryDifficulty)
router.put('/training/:id', TrainingController.updateTraining)
router.delete('/training/:id', TrainingController.deleteTraining)
router.post('/training/upload-image/:id', multipartMiddleware, TrainingController.uploadImage)
router.get('/training/get-image/:image', TrainingController.getImageFile)
router.delete('/training/delete-image/:image', TrainingController.deleteImage)

module.exports = router