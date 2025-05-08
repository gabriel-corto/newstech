"use client"

import { MenuItem } from "@headlessui/react"
import { LogOutIcon } from "lucide-react"
import { signOut } from "next-auth/react"
import { toast } from "sonner"

export function SignOutButton() {
	async function handleSignOut() {
		try {
			await signOut({ callbackUrl: "/auth" })
			toast.warning("Sessão Terminada!")
		} catch {
			toast.error("Erro ao terminar sessão!")
		}
	}

	return (
		<MenuItem
			as="button"
			onClick={() => {
				handleSignOut()
			}}
			className="w-full"
		>
			<div className="group flex w-full hover:bg-neutral-800 text-rose-400 items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
				<LogOutIcon className="size-4" />
				Sair
			</div>
		</MenuItem>
	)
}
