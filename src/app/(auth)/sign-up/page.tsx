"use client"

import Link from "next/link"
import Image from "next/image"

import { Lock, Mail, User, UserPlus2 } from "lucide-react"
import { GithubLoginButton } from "@/components/ui/github-login-button"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormTools } from "@/app/hooks/useFormTools"
import { SignUpForm, SignUpSchemaValidator } from "@/app/validators/sign-up"
import { Pulseloading } from "@/components/ui/pulse-loading"
import { toast } from "sonner"

export default function SignIn() {
	const { showPassword, ToggleButton } = useFormTools()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<SignUpForm>({
		resolver: zodResolver(SignUpSchemaValidator),
	})

	async function handleSignUp(data: SignUpForm) {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000))
			toast.success("Conta cadastrada com sucesso!")
		} catch {
			toast.error("Erro ao cadastrar conta!")
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSignUp)}
			className="bg-neutral-800/70 max-sm:bg-transparent rounded-xl p-8 w-md"
		>
			<div className="flex items-center justify-center gap-2 flex-col">
				<Image src="/logo.png" width={65} height={65} alt="Logo" />
				<h1 className="text-2xl font-extrabold">Cadastro Newstech</h1>

				<div className="flex items-center gap-1 text-sm">
					<p>Já Possui uma conta?</p>
					<Link
						href="/sign-in"
						className="flex font-bold gap-2 mr-auto text-sm hover:text-violet-400 duration-150 text-violet-500 items-center"
					>
						Faça Login
					</Link>
				</div>
			</div>

			<div className="grid grid-cols-2 gap-4 mt-2">
				<div className="relative flex flex-col gap-2 mt-3">
					<label htmlFor="email" className="text-neutral-300 font-medium pl-3">
						Primeiro Nome
					</label>
					<input
						id="firstName"
						type="text"
						className="bg-neutral-900/50 w-full transition-all rounded-xl placeholder:text-neutral-500 p-3 pl-10 text-neutral-100 border-2 border-neutral-800/80 outline-0 focus:border-2 focus:border-violet-500"
						placeholder="Jonh"
						{...register("firstName")}
					/>
					<User className="w-4 h-4 absolute top-12 left-5 text-neutral-500" />
				</div>
				<div className="relative flex flex-col gap-2 mt-3">
					<User className="w-4 h-4 absolute top-12 left-5 text-neutral-500" />
					<label htmlFor="email" className="text-neutral-300 font-medium pl-3">
						Último Nome
					</label>
					<input
						id="lastName"
						type="text"
						className="bg-neutral-900/50 w-full transition-all rounded-xl placeholder:text-neutral-500 p-3 pl-10 text-neutral-100 border-2 border-neutral-800/80 outline-0 focus:border-2 focus:border-violet-500"
						placeholder="Doe"
						{...register("lastName")}
					/>
				</div>
			</div>

			<div className="relative flex flex-col gap-2 mt-3">
				<Mail className="w-4 h-4 absolute top-12 left-5 text-neutral-500" />
				<label htmlFor="email" className="text-neutral-300 font-medium pl-3">
					E-mail
				</label>
				<input
					id="email"
					type="email"
					className="bg-neutral-900/50 w-full transition-all rounded-xl placeholder:text-neutral-500 p-3 pl-10 text-neutral-100 border-2 border-neutral-800/80 outline-0 focus:border-2 focus:border-violet-500"
					placeholder="seu@email.com"
					{...register("email")}
				/>
			</div>

			<div className="relative flex flex-col gap-2 mt-3">
				<Lock className="w-4 h-4 absolute top-12 left-5 text-neutral-500" />
				<label htmlFor="" className="text-neutral-300 font-medium pl-3">
					Palavra Passe
				</label>
				<input
					id="password"
					type={showPassword ? "text" : "password"}
					className="bg-neutral-900/50 w-full tracking transition-all rounded-xl placeholder:text-neutral-500 p-3 pl-10 text-neutral-100 border-2 border-neutral-800/80 outline-0 focus:border-2 focus:border-violet-500"
					placeholder="** ** **"
					{...register("password")}
				/>

				<ToggleButton />
			</div>

			<div className="relative flex flex-col gap-2 mt-4">
				<button
					type="submit"
					disabled={isSubmitting}
					className="flex items-center disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r to-violet-500 from-violet-700 hover:cursor-pointer hover:opacity-70 duration-300 text-white p-3 font-bold rounded-full w-full justify-center gap-2"
				>
					{!isSubmitting ? (
						<>
							<UserPlus2 className="w-5 h-5" />
							<span>Cadastrar-se</span>
						</>
					) : (
						<Pulseloading />
					)}
				</button>
			</div>

			<div className="grid grid-cols-3 mt-4 items-center text-neutral-300 text-sm">
				<div className="h-[1px] bg-neutral-700/70"></div>
				<p className="text-center">Ou se preferir</p>
				<div className="h-[1px] bg-neutral-700/70"></div>
			</div>

			<div className="mt-2">
				<GithubLoginButton providers="github" type="sign-up" />
			</div>
		</form>
	)
}
