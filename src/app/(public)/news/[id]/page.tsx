import Image from "next/image"
import { Metadata } from "next"

import { RecommendationCardItem } from "@/components/ui/news/recommendation-card-item"
import { Clock, User } from "lucide-react"
import { InteractionsBar } from "@/components/ui/interactions-bar"

export const metadata: Metadata = {
	title: "Título do News",
}

interface News {
	id: number
	title: string
	content: string
	author: string
	date: string
	category: string
}

interface DetailsProps {
	params: {
		id: string
	}
}

export default async function Details({ params }: DetailsProps) {
	const newsId = Number(params.id)
	let news: News

	try {
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/${newsId}`)
		news = await response.json()

		if (!news) {
			return <div>Nenhuma notícia encontrada</div>
		}
	} catch (error) {
		console.error("Erro ao buscar notícias:", error)
		return <div>Erro ao carregar as notícias</div>
	}

	return (
		<div className="py-12 max-xl:px-4 max-w-6xl mx-auto">
			<header className="mb-8">
				<div className="flex items-center justify-between mb-4">
					<div className="flex items-center gap-21text-sm text-neutral-300">
						<span className="flex items-center gap-1">
							<User className="w-4 h-4" />
							{news?.author}
						</span>
						<span className="mx-2">•</span>
						<span className="flex items-center gap-1">
							<Clock className="w-4 h-4" />5 min
						</span>
					</div>

					<InteractionsBar />
				</div>

				<h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white">
					{news?.title}
				</h1>

				<div className="mt-4 flex items-center gap-3">
					<h3 className="text-sm tracking-wider font-bold text-violet-600 bg-violet-600/10 py-1.5 px-3 rounded-xl">
						{news?.category}
					</h3>
					<span className="text-sm text-neutral-300">
						Publicado em {news?.date}
					</span>
				</div>
			</header>

			<div className="mt-12 grid grid-cols-3 gap-8 max-xl:grid-cols-1">
				<main className="col-span-2">
					<div className="overflow-hidden rounded-xl shadow-lg mb-8">
						<Image
							src="/item.webp"
							alt="Imagem ilustrativa sobre DevOps"
							width={1200}
							height={630}
							className="w-full h-auto object-cover transition-all hover:scale-105 duration-500 cursor-pointer"
							priority
						/>
					</div>

					<article className="prose prose-lg max-w-none">
						<p className="text-lg leading-8 text-white mb-6">{news.content}</p>
					</article>
				</main>

				<aside className="space-y-6">
					<h3 className="font-bold text-lg pt-4">Artigos Relacionados</h3>
					<div className="space-y-4">
						<RecommendationCardItem />
					</div>
				</aside>
			</div>
		</div>
	)
}
