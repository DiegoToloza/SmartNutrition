'use strict'
import { Router } from "express"
import * as dietController from '../controllers/diets.controller'
import { authJwt } from "../middlewares"
import multipart from 'connect-multiparty'

const router = Router()

const multipartMiddleware = multipart({uploadDir: './src/uploads/diets'})

router.post('/', [authJwt.verifyToken, authJwt.isAdmin], dietController.createDiet)

router.get('/', dietController.getDiets)

router.get('/:dietId', dietController.getDietById)

router.put('/:dietId', [authJwt.verifyToken, authJwt.isAdmin], dietController.updateDietById)

router.delete('/:dietId', [authJwt.verifyToken, authJwt.isAdmin], dietController.deleteDietById)

router.post('/upload-image/:dietId', [multipartMiddleware], dietController.uploadImage)

router.get('/get-image/:image', dietController.getImageFile)

router.delete('/delete-image/:image', [authJwt.verifyToken, authJwt.isAdmin], dietController.deleteImageFile)

export default router