import express from 'express'
import { userControllers } from './user.controller'
import validationRequist from '../../middleware/validationRequist'
import { userValidations } from './user.validation'
const router = express.Router()


router.post('/admin-register',validationRequist(userValidations.createUserZodValidationSchema), userControllers.createUserAll )



export const userRoutes = router