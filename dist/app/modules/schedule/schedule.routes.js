"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleRoutes = void 0;
const express_1 = __importDefault(require("express"));
const schedule_controller_1 = require("./schedule.controller");
const authGard_1 = __importDefault(require("../../middleware/authGard"));
const types_1 = require("../../middleware/types");
const router = express_1.default.Router();
router.post('/create-schedule', (0, authGard_1.default)(types_1.user_role.admin), schedule_controller_1.scheduleControllers.createClassSchedule);
router.get('/all-schedule', (0, authGard_1.default)(types_1.user_role.admin), schedule_controller_1.scheduleControllers.getAllClassSchedule);
exports.scheduleRoutes = router;
