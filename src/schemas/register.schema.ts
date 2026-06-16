// src/schemas/register.schema.ts
import { z } from 'zod';

export const step1Schema = z.object({
  firstName: z.string().min(2, 'Imię min. 2 znaki'),
  lastName: z.string().min(2, 'Nazwisko min. 2 znaki'),
  email: z.string().email('Niepoprawny email'),
  password: z
    .string()
    .min(8)
    .regex(/[A-Z]/, 'Min. 1 wielka litera')
    .regex(/[0-9]/, 'Min. 1 cyfra'),
  confirmPassword: z.string(),
}).refine(data => data.password === data.confirmPassword, {
  path: ['confirmPassword'],
  message: 'Hasła nie są takie same',
});

export const step2Schema = z.object({
  categories: z
    .array(
      z.string()
        .trim()
        .min(1, 'Kategoria nie może być pusta')
    )
    .min(1, 'Wybierz min. 1 kategorię')
    .refine(arr => arr.some(v => v.trim().length > 0), {
      message: 'Dodaj przynajmniej jedną kategorię',
    }),

  notifications: z.object({
    email: z.boolean(),
    push: z.boolean(),
  }),

  newsletter: z.boolean().optional(),
});

export const step3Schema = z.object({
  rodo: z.literal(true, {
    errorMap: () => ({
      message: 'Musisz zaakceptować RODO',
    }),
  }),
});

export const fullSchema = step1Schema
  .merge(step2Schema)
  .merge(step3Schema);

export type FormData = z.infer<typeof fullSchema>;