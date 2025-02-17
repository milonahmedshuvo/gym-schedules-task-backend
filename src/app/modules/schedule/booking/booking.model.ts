import { model, Schema } from "mongoose";
import { TBooking } from "./booking.interface";


const bookingSchema = new Schema<TBooking>(
    {
      trainee: { type: Schema.Types.ObjectId, ref: "User", required: true },
      classSchedule: { type: Schema.Types.ObjectId, ref: "ClassSchedule", required: true },
    },
    { timestamps: true }
  );



export const Booking = model<TBooking>("Booking", bookingSchema);