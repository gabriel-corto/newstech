import type { Metadata } from "next"
import { Sora } from "next/font/google"

import "@/css/globals.css"
import { Providers } from "../providers"

const sora = Sora({
	subsets: ["latin"],
	weight: ["400", "700"],
	variable: "--font-sora",
})

export const metadata: Metadata = {
	title: {
		template: "%s | Newstech",
		absolute: "Newstech",
	},
}

export default function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="pt" className={sora.variable}>
			<body
				className={`${sora.className} flex items-center justify-center h-screen antialiased bg-gradient-to-l text-neutral-100 from-neutral-900 to-neutral-950`}
			>
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
