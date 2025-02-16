import {z} from 'zod'


const createUserZodValidationSchema = z.object({
    body : z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email format"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
    role: z.enum(["admin", "trainer", "trainee"]),
    })
  });


export const userValidations = {
    createUserZodValidationSchema
} 