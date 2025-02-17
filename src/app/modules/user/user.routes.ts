import express from 'express'
import { userControllers } from './user.controller'
import validationRequist from '../../middleware/validationRequist'
import { userValidations } from './user.validation'
import auth from '../../middleware/authGard'
import { user_role } from '../../middleware/types'
const router = express.Router()


router.post('/admin-register',validationRequist(userValidations.createUserZodValidationSchema), userControllers.createUserAll )
router.get('/trainee-profile',auth(user_role.trainee), userControllers.traineeProfile )
router.get('/trainer-profile',auth(user_role.trainer), userControllers.trainerProfile )


export const userRoutes = router