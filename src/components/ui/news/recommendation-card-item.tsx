import Image from "next/image"

import { User } from "lucide-react"
import { LinkOverlay } from "../link-overlay"
import { TagItem } from "../tag-item"

export function RecommendationCardItem() {
	return (
		<div className="flex flex-col gap-3 p-4 hover:bg-neutral-800/50 rounded-xl transition-colors cursor-pointer group">
			<div className="relative aspect-video w-full overflow-hidden rounded-lg">
				<Image
					src="/archive-32.webp"
					fill
					alt="Imagem ilustrativa do artigo"
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>

				<LinkOverlay navigate="/news/details" size="small" />
			</div>

			<div className="flex flex-col gap-2">
				<TagItem variant="primary" size="small" text="Tech Lead" />

				<h3 className="font-semibold line-clamp-2">
					O News Tech é uma plataforma web desenvolvida em Next.js
				</h3>

				<div className="flex items-center gap-2 text-xs text-neutral-400">
					<User className="w-3 h-3" />
					<span>Jon Doe</span>
					<span>•</span>
					<span>02/2025</span>
				</div>
			</div>
		</div>
	)
}
