import { NextFunction, Request, Response } from "express";
import { scheduleServices } from "./schedule.service";

const createClassSchedule = async (req:Request, res:Response, next:NextFunction) => {
    
    try{
        const { trainer, date, timeSlot } = req.body;
        const result = await scheduleServices.createClassScheduleIntoDB(trainer, date, timeSlot)

        res.status(200).json({
            status: true,
            message: 'Schedule create successfully!',
            data: result
        })
    }catch(err){
        next(err)
    }
}





const getAllClassSchedule = async (req:Request, res:Response, next:NextFunction) => {
    
    try{
        
        const result = await scheduleServices.getAllScheduleFromDB()

        res.status(200).json({
            status: true,
            message: 'Schedule retrive successfully!',
            data: result
        })
    }catch(err){
        next(err)
    }
}



export const scheduleControllers = {
    createClassSchedule,
    getAllClassSchedule
}