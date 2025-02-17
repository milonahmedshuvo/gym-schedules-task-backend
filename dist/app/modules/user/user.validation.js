"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userValidations = void 0;
const zod_1 = require("zod");
const createUserZodValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        name: zod_1.z.string().min(1, "Name is required"),
        email: zod_1.z.string().email("Invalid email format"),
        password: zod_1.z.string().min(4, "Password must be at least 4 characters long"),
        role: zod_1.z.enum(["admin", "trainer", "trainee"]),
    })
});
exports.userValidations = {
    createUserZodValidationSchema
};
