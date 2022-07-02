'use strict'
import { Router } from "express"
import * as trainingController from '../controllers/trainings.controller'
import { authJwt } from "../middlewares"
import multipart from "connect-multiparty"

const router = Router()

const multipartMiddleware = multipart({uploadDir: './src/uploads/trainings'})

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], trainingController.createTraining)

router.get('/', trainingController.getTrainings)

router.get('/:trainingId', trainingController.getTrainingById)

router.put('/:trainingId', [authJwt.verifyToken, authJwt.isAdmin], trainingController.updateTrainingById)

router.delete('/:trainingId', [authJwt.verifyToken, authJwt.isAdmin], trainingController.deleteTrainingById)

router.post('/upload-image/:trainingId', multipartMiddleware, trainingController.uploadImage)

router.get('/get-image/:image', trainingController.getImageFile)

router.delete('/delete-image/:image', [authJwt.verifyToken, authJwt.isAdmin], trainingController.deleteImageFile)

export default router