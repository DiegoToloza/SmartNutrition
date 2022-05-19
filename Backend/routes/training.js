'use strict'

var express = require('express')
var TrainingController = require('../controllers/training')

var router = express.Router()

var multipart = require('connect-multiparty')
var multipartMiddleware = multipart({ uploadDir: './uploads/trainings'})

router.get('/training/:id?', TrainingController.getTraining)
router.get('/trainings', TrainingController.getTrainings)
router.get('/trainings/:category', TrainingController.getTrainingsCategory)
router.get('/trainings/:category/:difficulty', TrainingController.getTrainingsCategoryDifficulty)
router.post('/training/upload-image/:id', multipartMiddleware, TrainingController.uploadImage)
router.get('/training/get-image/:image', TrainingController.getImageFile)

module.exports = router