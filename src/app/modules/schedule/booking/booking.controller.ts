import { NextFunction, Request, Response } from "express";
import { bookingServices } from "./booking.service";

const bookClass = async (req:Request, res:Response, next:NextFunction) => {
    try{
        const { classSchedule } = req.body;
        const userId = req.user?._id;

        


        const result = await bookingServices.bookClassFromDB(classSchedule, userId)

        res.status(200).json({
            status: true,
            message: 'Booking is successfull!',
            data: result
        })
    }catch(err){
        next(err)
    }
}


export const bookingControllers = {
    bookClass
}