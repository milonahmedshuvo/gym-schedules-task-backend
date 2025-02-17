import { model, Schema } from "mongoose";
import { IClassSchedule } from "./schedule.interface";

const classScheduleSchema = new Schema<IClassSchedule>(
    {
      trainer: { type: Schema.Types.ObjectId, ref: "User", required: true },
      date: { type: String, required: true },
      timeSlot: { type: String, required: true },
      trainees: [{ type: Schema.Types.ObjectId, ref: "User" }],
    },
    { timestamps: true }
  );
  
 export const ClassSchedule = model<IClassSchedule>("ClassSchedule", classScheduleSchema);

