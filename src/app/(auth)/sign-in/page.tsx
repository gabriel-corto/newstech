"use client"

import Link from "next/link"
import Image from "next/image"

import { toast } from "sonner"
import { DoorOpen, Lock, LockOpen, Mail } from "lucide-react"

import { Pulseloading } from "@/components/ui/pulse-loading"
import { GithubLoginButton } from "@/components/ui/github-login-button"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useFormTools } from "@/app/hooks/useFormTools"
import { SignInForm, SignInSchemaValidator } from "@/app/validators/sign-in"

import { signIn } from "next-auth/react"

export default function SignIn() {
	const { ToggleButton, showPassword } = useFormTools()

	const {
		register,
		handleSubmit,
		formState: { isSubmitting, errors },
	} = useForm<SignInForm>({
		resolver: zodResolver(SignInSchemaValidator),
	})

	async function handleSignIn(data: SignInForm) {
		try {
			await new Promise((resolve) => setTimeout(resolve, 2000))
			toast.success("Conta cadastrada com sucesso!")
		} catch {
			toast.error("Erro ao cadastrar conta!")
		}
	}

	return (
		<form
			onSubmit={handleSubmit(handleSignIn)}
			className="bg-neutral-800/70 max-sm:bg-transparent rounded-xl p-8 w-md"
		>
			<div className="flex items-center justify-center gap-2 flex-col">
				<Image src="/logo.png" width={65} height={65} alt="Logo" />
				<h1 className="text-2xl font-extrabold">Login Newstech</h1>

				<div className="flex items-center gap-1 text-sm">
					<p>Não Possui uma conta?</p>
					<Link
						href="/sign-up"
						className="flex font-bold gap-2 mr-auto text-sm hover:text-violet-400 duration-150 text-violet-500 items-center"
					>
						Cadastre-se
					</Link>
				</div>
			</div>

			<div className="relative flex flex-col gap-2 mt-4">
				<Mail className="w-5 h-5 absolute top-12 left-5 text-neutral-500" />
				<label htmlFor="email" className="text-neutral-300 font-medium pl-3">
					E-mail
				</label>
				<input
					id="email"
					type="email"
					className="bg-neutral-900/50 w-full transition-all rounded-xl placeholder:text-neutral-500 p-3 pl-11 text-neutral-100 border-2 border-neutral-800/80 outline-0 focus:border-2 focus:border-violet-500"
					placeholder="seu@email.com"
					{...register("email")}
				/>
			</div>
			<div className="relative flex flex-col gap-2 mt-4">
				<Lock className="w-5 h-5 absolute top-12 left-5 text-neutral-500" />
				<label htmlFor="" className="text-neutral-300 font-medium pl-3">
					Palavra Passe
				</label>
				<input
					id="password"
					type={showPassword ? "text" : "password"}
					className="bg-neutral-900/50 w-full transition-all rounded-xl placeholder:text-neutral-500 p-3 pl-11 text-neutral-100 border-2 border-neutral-800/80 outline-0 focus:border-2 focus:border-violet-500"
					placeholder="*** *** ***"
					{...register("password")}
				/>

				<ToggleButton />
			</div>

			<div className="mt-4 pl-2">
				<p className="flex gap-2 mr-auto text-sm hover:text-violet-400 duration-150 text-violet-500 items-center">
					<LockOpen className="w-4 h-4" />
					<span>RecInerar credencias</span>
				</p>
			</div>

			<div className="relative flex flex-col gap-2 mt-5">
				<button
					type="submit"
					disabled={isSubmitting}
					className="flex items-center disabled:opacity-50 disabled:cursor-not-allowed bg-gradient-to-r to-violet-500 from-violet-700 hover:cursor-pointer hover:opacity-70 duration-300 text-white p-3 font-bold rounded-full w-full justify-center gap-2"
				>
					{!isSubmitting ? (
						<>
							<DoorOpen className="w-5 h-5" />
							<span>Fazer Login</span>
						</>
					) : (
						<Pulseloading />
					)}
				</button>
			</div>

			<div className="grid grid-cols-3 mt-8 items-center text-neutral-300 text-sm">
				<div className="h-[1px] bg-neutral-700/70"></div>
				<p className="text-center">Ou se preferir</p>
				<div className="h-[1px] bg-neutral-700/70"></div>
			</div>

			<div className="mt-2">
				<GithubLoginButton
					providers="github"
					type="sign-in"
					onClick={() => {
						signIn("github", { callbackUrl: "/" })
					}}
				/>
			</div>
		</form>
	)
}
