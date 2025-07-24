import {z} from 'zod';

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

export const registerSchema = z.object({
  name: z
    .string({message: "El nombre no puede ser un número"})
    .nonempty({message: "El nombre es obligatorio"})
    .min(3, {message:"El nombre debe tener más de 3 caracteres"})
    .max(50, {message:"El nombre debe tener menos de 50 caracteres"}),
  email: z.string().email({message: "Email no válido"}),
  password: z
    .string({message: "Contraseña obligatoria"})
    .regex(passwordRegex, {message: "Debe tener al menos 8 caracteres, un número y una mayúscula"})
});