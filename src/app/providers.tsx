"use client"

import { Toaster } from "sonner"
import { ReactNode } from "react"
import { SessionProvider } from "next-auth/react"

export function Providers({ children }: { children: ReactNode }) {
	return (
		<SessionProvider>
			<Toaster position="bottom-center" richColors />
			{children}
		</SessionProvider>
	)
}
