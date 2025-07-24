import {z} from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const registerSchema = z.object({
  name: z
    .string({message: "The name cannot be a number"})
    .nonempty({message: "The name is required"})
    .min(3, {message:"The name must be longer than 3 characters"})
    .max(50, {message:"The name must be shorter than 50 characters"}),
  email: z.string().email({message: "Invalid email"}),
  password: z
    .string({message: "Password is required"})
    .regex(passwordRegex, {message: "Must be at least 8 characters long, contain a number and an uppercase letter"})
});