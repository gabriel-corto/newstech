export function Pulseloading() {
	return (
		<div className="flex items-center h-6 justify-between gap-2">
			<span className="flex w-3 h-3 animate-pulse delay-200 rounded-full bg-white"></span>
			<span className="flex w-3 h-3 animate-pulse delay-300 rounded-full bg-white"></span>
			<span className="flex w-3 h-3 animate-pulse delay-500 rounded-full bg-white"></span>
		</div>
	)
}
