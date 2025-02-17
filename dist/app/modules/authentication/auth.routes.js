"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authRoutes = void 0;
const express_1 = __importDefault(require("express"));
const auth_controller_1 = require("./auth.controller");
const validationRequist_1 = __importDefault(require("../../middleware/validationRequist"));
const auth_validation_1 = require("./auth.validation");
const router = express_1.default.Router();
router.post('/login', (0, validationRequist_1.default)(auth_validation_1.authValidations.userLoginValidationSchema), auth_controller_1.authController.userLogin);
exports.authRoutes = router;
