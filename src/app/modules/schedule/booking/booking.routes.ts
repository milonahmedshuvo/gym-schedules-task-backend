import express from 'express'
import { bookingControllers } from './booking.controller'
import auth from '../../../middleware/authGard'
import { user_role } from '../../../middleware/types'

const router = express.Router()


router.post('/class-booking',auth(user_role.trainee), bookingControllers.bookClass)

export const bookingRoutes = router
