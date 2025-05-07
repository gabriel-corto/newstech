import Image from "next/image"

import { LinkOverlay } from "../link-overlay"
import { TagItem } from "../tag-item"

import { User } from "lucide-react"
import { InteractionsBar } from "../interactions-bar"

interface NewsItemProps {
	news: {
		id: number
		title: string
		content: string
		author: string
		date: string
		category: string
	}
}
export function NewsCardItem({ news }: NewsItemProps) {
	return (
		<div className="border p-3 shadow-sm h-full flex flex-col justify-between rounded-xl border-neutral-800/50 bg-neutral-900">
			<div className="overflow-hidden relative group rounded-xl">
				<Image
					src="/item.webp"
					alt=""
					width={300}
					height={300}
					className="rounded-xl hover:scale-110 object-cover transition-all duration-300 cursor-pointer w-full aspect-video"
				/>
				<LinkOverlay navigate={`/news/${news.id}`} size="larger" />
			</div>

			<div className="mt-4 flex flex-col gap-2 flex-grow">
				<TagItem text={news.category} size="large" variant="primary" />

				<h1 className="text-xl font-extrabold max-xl:px-2 line-clamp-2 min-h-[3.5rem]">
					{news.title}
				</h1>

				<div className="mt-auto">
					<div className="flex items-center justify-between max-xl:px-2">
						<div className="flex items-center gap-2">
							<div className="w-8 h-8 flex items-center justify-center bg-neutral-800 rounded-full">
								<User className="w-4 h-4" />
							</div>
							<span className="text-xs">{news.author}</span>
							<span className="text-xs text-neutral-400">- {news.date}</span>
						</div>

						<InteractionsBar />
					</div>
				</div>
			</div>
		</div>
	)
}
