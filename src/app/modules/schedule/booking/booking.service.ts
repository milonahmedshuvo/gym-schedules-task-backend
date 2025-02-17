import { Schema } from "mongoose";
import AppError from "../../../error/appError";
import { ClassSchedule } from "../schedule.model";
import { Booking } from "./booking.model";

const bookClassFromDB = async (classId: string, userId: string) => {
    

    // Convert string IDs to ObjectId and cast them properly
    const classObjectId = classId as unknown as Schema.Types.ObjectId;
    const userObjectId = userId as unknown as Schema.Types.ObjectId;



    // Check if the class exists
    const classSchedule = await ClassSchedule.findById(classObjectId);
    if (!classSchedule) {
        throw new AppError(400, "Class not found.");
    }




    // Check if class is full max 10 trainees
    if (classSchedule.trainees.length >= 10) {
        throw new AppError(400, "Class is full.");
    }



    // Create booking
    const newBooking = new Booking({ trainee: userObjectId, classSchedule: classObjectId });
    classSchedule.trainees.push(userObjectId); 
    await newBooking.save();
    await classSchedule.save();

    return {
        newBooking
    }
};

export const bookingServices = {
    bookClassFromDB
};
