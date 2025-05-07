import { Eye, EyeOff } from "lucide-react"
import { useState } from "react"

export function useFormTools() {
	const [showPassword, setShowPassword] = useState(false)

	function toogleShowPassword() {
		setShowPassword(!showPassword)
	}

	function ToggleButton() {
		return (
			<div
				onClick={toogleShowPassword}
				title={showPassword ? "Ocultar" : "Mostrar"}
				aria-label={
					showPassword ? "Ocultar Palavra Passe" : "Mostrar Palavra Passe"
				}
				className="absolute top-12 right-5 text-neutral-500 cursor-pointer"
			>
				{!showPassword ? (
					<Eye className="w-4 h-4" />
				) : (
					<EyeOff className="w-4 h-4" />
				)}
			</div>
		)
	}
	return { showPassword, toogleShowPassword, ToggleButton }
}
