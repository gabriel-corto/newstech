import { Hand, Bookmark, Share2 } from "lucide-react"

interface InteractionsBarProps {
	onHandle?: (contentId?: string) => void
	onShare?: (contentId?: string) => void
	onSave?: (contentId?: string) => void
}

export function InteractionsBar({}: InteractionsBarProps) {
	return (
		<div className="flex items-center justify-between">
			<button
				title="Aplaudir"
				aria-label="Aplaudir"
				className="hover:bg-neutral-800 focus:outline-0 focus-within:border-1 border-neutral-700 focus:bg-neutral-800 text-white duration-300 cursor-pointer flex items-center justify-center w-9 h-9 rounded-full"
			>
				<Hand className="w-4 h-4" />
			</button>

			<button
				title="Salvar"
				aria-label="Salvar"
				className="hover:bg-neutral-800 focus:outline-0 focus-within:border-1 border-neutral-700 focus:bg-neutral-800 text-white duration-300 cursor-pointer flex items-center justify-center w-9 h-9 rounded-full"
			>
				<Bookmark className="w-4 h-4" />
			</button>

			<button
				title="Compartilhar"
				aria-label="Compartilhar"
				className="hover:bg-neutral-800 focus:outline-0 focus-within:border-1 border-neutral-700 focus:bg-neutral-800 text-white duration-300 cursor-pointer flex items-center justify-center w-9 h-9 rounded-full"
			>
				<Share2 className="w-4 h-4" />
			</button>
		</div>
	)
}
