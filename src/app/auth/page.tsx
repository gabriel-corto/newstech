"use client"

import Image from "next/image"

import { signIn } from "next-auth/react"
import { SocialAuthButton } from "@/components/ui/social-auth-button"

export default function SignIn() {
	return (
		<div className="bg-neutral-800/70 max-sm:bg-transparent rounded-xl p-12 w-md">
			<div className="flex items-center justify-center gap-2 flex-col">
				<div className="flex flex-col gap-4 items-center justify-center">
					<Image
						src="/logo.png"
						width={65}
						height={65}
						alt="Logo"
						className="animate-pulse"
					/>

					<h1 className="text-2xl font-extrabold">Acesse Newstech</h1>
					<h3 className="font-bold">Fácil, Rápido e Seguro</h3>
				</div>
			</div>

			<div className="mt-4 flex-col flex items-center gap-4">
				<SocialAuthButton
					providers="github"
					type="sign-in"
					onClick={() => {
						signIn("github", { callbackUrl: "/" })
					}}
				/>

				<SocialAuthButton
					type="sign-in"
					providers="google"
					onClick={() => {
						signIn("google", { callbackUrl: "/" })
					}}
				/>

				<SocialAuthButton
					providers="facebook"
					type="sign-in"
					onClick={() => {
						signIn("facebook", { callbackUrl: "/" })
					}}
				/>
			</div>
		</div>
	)
}
