import {z} from 'zod';

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Usuario es requerido'
    }),
    email: z
        .string({
            required_error: 'Email es requerido'
        })
        .email({
            message: 'Email invalido',
        }),
    password: z
        .string({
            required_error: "Password es requerido",
        })
        .min(6, {
            message: 'Password minimo con 6 caracteres',
        }),
})

export const loginSchema = z.object({
    email: z
        .string({
            required_error: 'Email es requerido',
        })
        .email({
            message: 'Email invalido'
        }),
        password: z
        .string({
            required_error: 'Password es requerido'
        })
        .min(6, {
            message: 'Password minimo con 6 caracteres'
        }),
});