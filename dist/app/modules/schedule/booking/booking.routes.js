"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookingRoutes = void 0;
const express_1 = __importDefault(require("express"));
const booking_controller_1 = require("./booking.controller");
const authGard_1 = __importDefault(require("../../../middleware/authGard"));
const types_1 = require("../../../middleware/types");
const router = express_1.default.Router();
router.post('/class-booking', (0, authGard_1.default)(types_1.user_role.trainee), booking_controller_1.bookingControllers.bookClass);
exports.bookingRoutes = router;
