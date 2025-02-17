import mongoose, { Document } from "mongoose";

export interface TBooking extends Document {
  trainee: mongoose.Types.ObjectId;
  classSchedule: mongoose.Types.ObjectId;
}