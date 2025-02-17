import {z} from 'zod'


const userLoginValidationSchema = z.object({
    body : z.object({
    email: z.string().email("Invalid email format"),
    password: z.string().min(4, "Password must be at least 4 characters long"),
    })
  });


export const authValidations = {
    userLoginValidationSchema
} 