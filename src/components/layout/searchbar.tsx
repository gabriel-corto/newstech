import { Search } from "lucide-react"

export function Searchbar() {
	return (
		<form action="#" className="relative max-xl:hidden">
			<input
				className="bg-neutral-800 shadow-sm max-sm:w-9 transition-all rounded-full w-96 placeholder:text-neutral-500 p-3 pl-10 text-neutral-100 border-2 border-transparent outline-0 focus:border-2 focus:border-violet-500"
				placeholder="Busca uma novidade"
			/>
			<Search className="text-neutral-500 absolute left-3 top-3" />
		</form>
	)
}
