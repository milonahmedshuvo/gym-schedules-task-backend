import express from 'express'
import { scheduleControllers } from './schedule.controller'
import auth from '../../middleware/authGard'
import { user_role } from '../../middleware/types'

const router = express.Router()



router.post('/create-schedule', auth(user_role.admin), scheduleControllers.createClassSchedule)


export const scheduleRoutes = router