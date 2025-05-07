"use client"

import { useState } from "react"

interface TagItemProps {
	text: string
	size: "small" | "large"
	variant: "primary" | "secondary"

	touchble?: boolean
}

export function TagItem({ size, text, variant, touchble }: TagItemProps) {
	const [isPressed, setIsPressed] = useState(false)

	function togglePressed() {
		setIsPressed(!isPressed)
	}

	return (
		<span
			onClick={() => {
				touchble && togglePressed()
			}}
			className={`w-fit ${
				size === "small" ? "text-xs" : "text-sm"
			} tracking-wider uppercase ${
				variant === "primary"
					? "text-violet-500 bg-violet-600/10"
					: "border border-neutral-700  bg-neutral-800 hover:bg-neutral-700/90"
			} py-1.5 px-3 rounded-xl font-bold hover:cursor-pointer duration-200 hover:scale-110 ${
				variant === "secondary" && isPressed && "bg-violet-500"
			}`}
		>
			{text}
		</span>
	)
}
