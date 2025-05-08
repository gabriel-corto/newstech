import type { Metadata } from "next"
import { Sora } from "next/font/google"

import "@/css/globals.css"
import { Header } from "@/components/layout/header"

import { Providers } from "../providers"
import { redirect } from "next/navigation"

import { getServerSession } from "next-auth"

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
	description: "Explore as últimas novidades no mundo das techs!",
}

export default async function AppLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	const session = await getServerSession()

	if (!session) {
		redirect("/auth")
	}

	return (
		<html lang="pt" className={sora.variable}>
			<body
				className={`${sora.className} max-w-6xl m-auto antialiased bg-gradient-to-l text-neutral-100 from-neutral-900 to-neutral-950`}
			>
				<Providers>
					<Header />

					{children}
				</Providers>
			</body>
		</html>
	)
}
