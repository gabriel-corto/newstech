import Image from "next/image"

import { User, Clock } from "lucide-react"

import { TagItem } from "../tag-item"
import { LinkOverlay } from "../link-overlay"
import { InteractionsBar } from "../interactions-bar"

export function HightlightCardItem() {
	return (
		<div className="flex-1 group">
			<div className="overflow-hidden relative rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
				<Image
					src="/hightlight.webp"
					alt="Imagem ilustrativa sobre o papel do Tech Lead"
					width={600}
					height={400}
					className="w-full h-64 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500 cursor-pointer"
				/>

				<LinkOverlay navigate="/news/details" size="larger" />
			</div>

			<div className="mt-5 space-y-3">
				<div className="flex items-center justify-between">
					<TagItem variant="primary" size="small" text="Tech Lead" />

					<span className="flex items-center text-xs text-neutral-400 gap-1">
						<Clock className="w-3 h-3" />5 min read
					</span>
				</div>

				<h2 className="text-2xl font-bold text-white transition-colors">
					O Papel Essencial do Tech Lead na Era Moderna
				</h2>

				<div className="flex items-end justify-between pt-3">
					<div className="flex items-center gap-3">
						<div className="w-10 h-10 flex items-center justify-center bg-neutral-800 rounded-full">
							<User className="w-4 h-4 text-neutral-200" />
						</div>
						<div>
							<p className="text-sm font-medium">Jon Doe</p>
							<p className="text-xs text-gray-400">05 Jan 2025</p>
						</div>
					</div>

					<InteractionsBar />
				</div>
			</div>
		</div>
	)
}
