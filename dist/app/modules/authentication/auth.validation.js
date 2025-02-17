"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidations = void 0;
const zod_1 = require("zod");
const userLoginValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        email: zod_1.z.string().email("Invalid email format"),
        password: zod_1.z.string().min(4, "Password must be at least 4 characters long"),
    })
});
exports.authValidations = {
    userLoginValidationSchema
};
