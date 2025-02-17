"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingServices = void 0;
const appError_1 = __importDefault(require("../../../error/appError"));
const schedule_model_1 = require("../schedule.model");
const booking_model_1 = require("./booking.model");
const bookClassFromDB = (classId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    // Convert string IDs to ObjectId and cast them properly
    const classObjectId = classId;
    const userObjectId = userId;
    // Check if the class exists
    const classSchedule = yield schedule_model_1.ClassSchedule.findById(classObjectId);
    if (!classSchedule) {
        throw new appError_1.default(400, "Class not found.");
    }
    // Check if class is full max 10 trainees
    if (classSchedule.trainees.length >= 10) {
        throw new appError_1.default(400, "Class is full.");
    }
    // Create booking
    const newBooking = new booking_model_1.Booking({ trainee: userObjectId, classSchedule: classObjectId });
    classSchedule.trainees.push(userObjectId);
    yield newBooking.save();
    yield classSchedule.save();
    return {
        newBooking
    };
});
exports.bookingServices = {
    bookClassFromDB
};
