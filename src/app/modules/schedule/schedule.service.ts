import AppError from "../../error/appError";
import { user_role } from "../../middleware/types";
import { User } from "../user/user.model";
import { ClassSchedule } from "./schedule.model";

const createClassScheduleIntoDB = async (trainerId:string, date:string, timeSlot:string, ) => {

    // Validate trainer role
    const trainer = await User.findById(trainerId);
    if (!trainer || trainer.role !== user_role.trainer) {
    throw new AppError(400, "Invalid trainer ID.")
    }

    // Check daily limit max 5 classes per day....
    const existingSchedules = await ClassSchedule.find({ date });
    if (existingSchedules.length >= 5) {
      throw new AppError(400, "Daily class limit reached (5 classes per day).")
    }


  const result = await ClassSchedule.create({ trainer: trainerId, date, timeSlot, trainees: [] })
    

   return {
     result
   }
}



export const scheduleServices = {
    createClassScheduleIntoDB
}