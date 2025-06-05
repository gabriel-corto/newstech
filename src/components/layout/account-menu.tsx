"use client"

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react"

import { SignOutButton } from "../ui/sign-out-button"
import { useSession } from "next-auth/react"
import Image from "next/image"

export function AccountMenu() {
	const { data } = useSession()

	console.log(data)

	return (
		<Menu>
			<MenuButton className="flex items-center cursor-pointer hover:scale-105 duration-300 justify-center rounded-full">
				<div className="w-12 h-12 flex items-center cursor-pointer hover:scale-105 duration-300 justify-center rounded-full">
					{data?.user?.image ? (
						<Image
							src={data.user.image}
							width={100}
							height={100}
							alt=""
							className="rounded-full"
						/>
					) : (
						<div className="h-12 w-12 rounded-full bg-neutral-700 animate-pulse"></div>
					)}
				</div>
			</MenuButton>

			<MenuItems
				transition
				anchor="bottom end"
				className="w-48 origin-top-right mt-2 rounded-xl  cursor-pointer border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0"
			>
				<MenuItem as="button">
					<div className="group flex w-full items-center  gap-2 rounded-lg px-3 py-1.5 data-focus:bg-white/10">
						{data?.user?.name}
					</div>
				</MenuItem>

				<div className="bg-neutral-800 h-[1px]"></div>

				<SignOutButton />
			</MenuItems>
		</Menu>
	)
}
