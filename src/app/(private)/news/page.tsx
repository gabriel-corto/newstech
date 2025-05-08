import { Metadata } from "next"

import { TagItem } from "@/components/ui/tag-item"
import { NewsCardItem } from "@/components/ui/news/news-card-item"

export const metadata: Metadata = {
	title: "Notícias",
}

interface News {
	id: number
	title: string
	content: string
	author: string
	date: string
	category: string
}

export default async function News() {
	let news: News[] = []

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}`)
		news = await response.json()
	} catch {
		if (!news) {
			return <div>Nenhuma notícia encontrada</div>
		}
	}

	const tags = [
		"tech lead",
		"ia",
		"devops",
		"cloud",
		"mobile",
		"web",
		"engenharia",
	]

	return (
		<div className="py-16 max-xl:px-4">
			<header>
				<h1 className="text-2xl font-extrabold tracking-wider">
					Mais Recentes
				</h1>
			</header>
			<div className="mt-4 flex items-center gap-3 max-sm:overflow-x-auto">
				{tags.map((tag) => (
					<TagItem
						size="small"
						touchble
						text={tag}
						key={tag}
						variant="secondary"
					/>
				))}
			</div>

			<div className="mt-10 grid grid-cols-3 max-xl:grid-cols-2 max-sm:grid-cols-1 gap-6 gap-y-16">
				{news.map((item) => {
					return <NewsCardItem key={item.id} news={item} />
				})}
			</div>
		</div>
	)
}
