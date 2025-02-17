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
exports.scheduleServices = void 0;
const appError_1 = __importDefault(require("../../error/appError"));
const types_1 = require("../../middleware/types");
const user_model_1 = require("../user/user.model");
const schedule_model_1 = require("./schedule.model");
const createClassScheduleIntoDB = (trainerId, date, timeSlot) => __awaiter(void 0, void 0, void 0, function* () {
    // Validate trainer role
    const trainer = yield user_model_1.User.findById(trainerId);
    if (!trainer || trainer.role !== types_1.user_role.trainer) {
        throw new appError_1.default(400, "Invalid trainer ID.");
    }
    // Check daily limit max 5 classes per day....
    const existingSchedules = yield schedule_model_1.ClassSchedule.find({ date });
    if (existingSchedules.length >= 5) {
        throw new appError_1.default(400, "Daily class limit reached (5 classes per day).");
    }
    const result = yield schedule_model_1.ClassSchedule.create({ trainer: trainerId, date, timeSlot, trainees: [] });
    return {
        result
    };
});
const getAllScheduleFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield schedule_model_1.ClassSchedule.find();
    return {
        result
    };
});
exports.scheduleServices = {
    createClassScheduleIntoDB,
    getAllScheduleFromDB
};
