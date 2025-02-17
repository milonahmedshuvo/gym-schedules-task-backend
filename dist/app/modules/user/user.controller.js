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
exports.userControllers = void 0;
const user_service_1 = require("./user.service");
const createUserAll = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userData = req.body;
        const result = yield user_service_1.userServices.createUserIntoDB(userData);
        res.status(200).json({
            status: true,
            message: 'Registetion successfull!',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const traineeProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        console.log({ userId });
        const result = yield user_service_1.userServices.traineeProfileFromDB(userId);
        res.status(200).json({
            status: true,
            message: 'Trainee profile retrive successfull!',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
const trainerProfile = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const userId = (_a = req.user) === null || _a === void 0 ? void 0 : _a._id;
        console.log({ userId });
        const result = yield user_service_1.userServices.trainerProfileFromDB(userId);
        res.status(200).json({
            status: true,
            message: 'Trainer profile retrive successfull!',
            data: result
        });
    }
    catch (err) {
        next(err);
    }
});
exports.userControllers = {
    createUserAll,
    traineeProfile,
    trainerProfile
};
