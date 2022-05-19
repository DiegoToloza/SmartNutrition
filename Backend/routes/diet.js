'use strict'

var express = require('express')
var DietController = require('../controllers/diet')

var router = express.Router()

var multipart = require('connect-multiparty')
var multipartMiddleware = multipart({ uploadDir: './uploads/diets'})

router.post('/save-diet', DietController.saveDiet)
router.get('/diet/:id?', DietController.getDiet)
router.get('/diets', DietController.getDiets)
router.get('/diets/:category', DietController.getDietsCategory)
router.put('/diet/:id', DietController.updateDiet)
router.delete('/diet/:id', DietController.deleteDiet)
router.post('/diet/upload-image/:id', multipartMiddleware, DietController.uploadImage)
router.get('/diet/get-image/:image', DietController.getImageFile)
router.delete('/diet/delete-image/:image', DietController.deleteImage)

module.exports = router