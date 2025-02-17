import express from 'express'
import { authController } from './auth.controller'
import validationRequist from '../../middleware/validationRequist'
import { authValidations } from './auth.validation'

const router = express.Router()


router.post('/login', validationRequist(authValidations.userLoginValidationSchema),  authController.userLogin)



export const authRoutes = router
