import Image from "next/image"

import { Navbar } from "./navbar"
import { Searchbar } from "./searchbar"
import { AccountMenu } from "./account-menu"

export function Header() {
	return (
		<header className="flex items-center justify-between py-5 max-xl:px-3">
			<Image
				src="/logo.png"
				width={86}
				height={86}
				alt="Logo Newstech"
				className="max-sm:w-12"
			/>

			<Navbar />
			<Searchbar />

			<AccountMenu />
		</header>
	)
}
