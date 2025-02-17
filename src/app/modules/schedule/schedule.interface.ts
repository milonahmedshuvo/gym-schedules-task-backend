import { Document,Schema } from "mongoose";


export interface IClassSchedule extends Document {
    trainer: Schema.Types.ObjectId;
    date: string;
    timeSlot: string; //"08:00-10:00"
    trainees: Schema.Types.ObjectId[];
  }
  
  