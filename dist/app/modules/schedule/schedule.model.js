"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassSchedule = void 0;
const mongoose_1 = require("mongoose");
const classScheduleSchema = new mongoose_1.Schema({
    trainer: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", required: true },
    date: { type: String, required: true },
    timeSlot: { type: String, required: true },
    trainees: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
}, { timestamps: true });
exports.ClassSchedule = (0, mongoose_1.model)("ClassSchedule", classScheduleSchema);
