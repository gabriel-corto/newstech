import { z } from "zod"

export const SignUpSchemaValidator = z.object({
	firstName: z.string().min(3, "Nome Inválido"),
	lastName: z.string().min(3, "Sobrenome Inválido"),

	email: z.string().email("Email Inválido"),
	password: z.string().min(6, "Palavra passe Inválida (6 Dígitos)"),
})

export type SignUpForm = z.infer<typeof SignUpSchemaValidator>
