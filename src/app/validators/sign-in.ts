import { z } from "zod"

export const SignInSchemaValidator = z.object({
	email: z.string().email("Email Inválido"),
	password: z.string().min(6, "Palavra passe Inválida (6 Dígitos)"),
})

export type SignInForm = z.infer<typeof SignInSchemaValidator>
