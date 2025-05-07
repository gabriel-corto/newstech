import Link from "next/link"
import { ArrowUpRightFromSquare } from "lucide-react"

interface LinkOverlayProps {
	navigate: string
	size: "small" | "larger"
}

export function LinkOverlay({ navigate, size }: LinkOverlayProps) {
	return (
		<Link
			href={navigate}
			className="opacity-0 overflow-hidden absolute gap-2 font-bold bg-neutral-900 group-hover:opacity-70 duration-300 cursor-pointer flex items-center justify-center inset-0"
		>
			<ArrowUpRightFromSquare
				className={size === "small" ? "w-4 h-4" : "w-5 h-5"}
			/>
			<span className={size === "small" ? "text-xs" : "text-sm"}>Ler</span>
		</Link>
	)
}
