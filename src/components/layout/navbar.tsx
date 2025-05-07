import Link from "next/link"

export function Navbar() {
	return (
		<nav className="flex items-center gap-8 max-sm:gap-6">
			<Link href="/">Home</Link>
			<Link href="/news">News</Link>
			<Link href="#">Explorar</Link>
		</nav>
	)
}
