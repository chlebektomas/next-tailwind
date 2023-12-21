"use client";

import { useSession } from "next-auth/react";
import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Menu from "@/components/Menu";

function Account() {
	const { data: session } = useSession();

	return (
		<div className="text-center">
			<div className="avatar avatar-md w-32 h-32 mx-auto mb-6 rounded-full relative">
				{session?.user?.image ? (
					<Image
						src={session?.user?.image}
						alt="avatar"
						className="rounded-full"
						fill
					/>
				) : (
					<UserCircleIcon
						className="h-full w-full text-gray-300"
						aria-hidden="true"
					/>
				)}
			</div>
			<h1 className="text-lg font-semibold">{session?.user?.name}</h1>
			<h2 className=" text-neutral-500">{session?.user.email}</h2>
			<Menu />
		</div>
	);
}

export default Account;
