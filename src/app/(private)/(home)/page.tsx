import { Metadata } from "next"

import { HightlightCardItem } from "@/components/ui/news/hightlight-card-news"
import { PopularCardNews } from "@/components/ui/news/popular-card-news"

export const metadata: Metadata = {
	title: "Início",
}

export default async function Home() {
	return (
		<div className="py-16 flex items-start gap-16 max-sm:flex-col max-xl:px-4 justify-between">
			<HightlightCardItem />

			<div className="flex-2 max-sm:flex-1 w-full">
				<h1 className="text-2xl  w-fit font-extrabold pb-2 border-b-2 border-b-violet-500">
					Populares
				</h1>

				<div className="mt-4 flex flex-col gap-2">
					{Array.from({ length: 3 }).map((item, index) => {
						return <PopularCardNews key={index} />
					})}
				</div>
			</div>
		</div>
	)
}
