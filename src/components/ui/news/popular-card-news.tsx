import Image from "next/image"

import { Clock, User } from "lucide-react"
import { LinkOverlay } from "../link-overlay"
import { TagItem } from "../tag-item"

export function PopularCardNews() {
	return (
		<div className="flex p-2 max-xl:flex-col group gap-6 max-sm:w-full hover:bg-neutral-800 rounded-xl duration-300 cursor-pointer items-start">
			<div className="relative">
				<Image
					src="/archive-32.webp"
					width={200}
					height={150}
					alt=""
					className="rounded-xl object-cover h-auto max-xl:w-full max-sm:w-full shadow-sm"
				/>

				<LinkOverlay navigate="/news/details" size="small" />
			</div>

			<div className="flex flex-col gap-4">
				<TagItem variant="primary" size="small" text="Tech Lead" />

				<h1 className="text-md font-bold">O News Tech é uma plataforma</h1>

				<div className="flex items-center gap-2">
					<User className="w-4 h-4" />
					<span className="text-sm">Jon Doe</span>
					<span className="text-sm text-neutral-400">•</span>
					<span className="flex items-center text-xs text-neutral-400 gap-1">
						<Clock className="w-3 h-3" />5 min read
					</span>
				</div>
			</div>
		</div>
	)
}
