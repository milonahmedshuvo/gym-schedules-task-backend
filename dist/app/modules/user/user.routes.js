"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoutes = void 0;
const express_1 = __importDefault(require("express"));
const user_controller_1 = require("./user.controller");
const validationRequist_1 = __importDefault(require("../../middleware/validationRequist"));
const user_validation_1 = require("./user.validation");
const authGard_1 = __importDefault(require("../../middleware/authGard"));
const types_1 = require("../../middleware/types");
const router = express_1.default.Router();
router.post('/admin-register', (0, validationRequist_1.default)(user_validation_1.userValidations.createUserZodValidationSchema), user_controller_1.userControllers.createUserAll);
router.get('/trainee-profile', (0, authGard_1.default)(types_1.user_role.trainee), user_controller_1.userControllers.traineeProfile);
router.get('/trainer-profile', (0, authGard_1.default)(types_1.user_role.trainer), user_controller_1.userControllers.trainerProfile);
exports.userRoutes = router;
