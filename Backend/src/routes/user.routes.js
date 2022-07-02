'use strict'
import { Router } from "express"
import * as userController from '../controllers/user.controller'
import {authJwt, verifySignup} from '../middlewares'
import multipart from "connect-multiparty"

const router = Router()

const multipartMiddleware = multipart({uploadDir: './src/uploads/users'})

router.get('/', [authJwt.verifyToken, authJwt.isAdmin], userController.getUsers)

//router.get('/get-user', [authJwt.verifyToken], userController.getUserById)

router.get('/get-user', [authJwt.verifyToken], userController.getCurrentUser)

router.put('/:userId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], userController.updateUserById)

router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteUserById)

router.get('/get-image/:image', userController.getImageFile)

export default router