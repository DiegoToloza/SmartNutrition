'use strict'
import { Router } from "express"
import * as authController from '../controllers/auth.controller'
import { verifySignup } from '../middlewares'
import { authJwt } from "../middlewares"

const router = Router()

router.post('/signup', [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted], authController.signUp)

router.post('/signin', authController.signIn)

router.get('/isadmin', [authJwt.isAdmin], authController.isAdmin)

export default router