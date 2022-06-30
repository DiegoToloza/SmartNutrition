'use strict'
import { Router } from "express"
import * as userController from '../controllers/user.controller'
import {authJwt, verifySignup} from '../middlewares'

const router = Router()

router.post('/', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkRolesExisted], userController.createUser)

router.get('/', userController.getUsers)

router.get('/:userId', userController.getUserById)

router.put('/:userId', [authJwt.verifyToken, authJwt.isAdmin, verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], userController.updateUserById)

router.delete('/:userId', [authJwt.verifyToken, authJwt.isAdmin], userController.deleteUserById)

export default router