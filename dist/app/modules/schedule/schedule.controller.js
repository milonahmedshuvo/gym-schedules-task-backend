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
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleControllers = void 0;
const schedule_service_1 = require("./schedule.service");
const createClassSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { trainer, date, timeSlot } = req.body;
        const result = yield schedule_service_1.scheduleServices.createClassScheduleIntoDB(trainer, date, timeSlot);
        res.status(200).json({
            status: true,
            message: 'Schedule create successfully!',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const getAllClassSchedule = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield schedule_service_1.scheduleServices.getAllScheduleFromDB();
        res.status(200).json({
            status: true,
            message: 'Schedule retrive successfully!',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.scheduleControllers = {
    createClassSchedule,
    getAllClassSchedule
};
