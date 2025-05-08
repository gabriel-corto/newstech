import Image from "next/image"

type AuthProviders = "google" | "facebook" | "github"

interface SocialAuthButtonProps {
	onClick?: () => void
	providers: AuthProviders
	type: "sign-up" | "sign-in"
}

export function SocialAuthButton({
	type,
	providers,
	onClick,
}: SocialAuthButtonProps) {
	let provider: AuthProviders | null = null
	provider = ["facebook", "github", "google"].includes(providers)
		? providers
		: null

	return (
		<button
			type="button"
			onClick={onClick}
			className="flex items-center bg-neutral-800 text-sm hover:cursor-pointer hover:bg-neutral-700/40 duration-300 text-white p-3 font-bold rounded-xl h-14 w-full justify-center gap-2"
		>
			<Image
				src={`/${provider}.svg`}
				width={20}
				height={20}
				alt=""
				className="w-4 h-4"
			/>
			<span className="capitalize">
				{type === "sign-in" ? "Continuar " : "Cadastre-se"} com {provider}
			</span>
		</button>
	)
}
