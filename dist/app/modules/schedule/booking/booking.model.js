"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Booking = void 0;
const mongoose_1 = require("mongoose");
const bookingSchema = new mongoose_1.Schema({
    trainee: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    classSchedule: { type: mongoose_1.Schema.Types.ObjectId, ref: "ClassSchedule", required: true },
}, { timestamps: true });
exports.Booking = (0, mongoose_1.model)("Booking", bookingSchema);
