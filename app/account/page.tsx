import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import AccountMenu from "@/app/account/_components/AccountMenu";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Account() {
	const session = await getServerSession(authOptions);

	if (!session) return;

	const { image, name, email } = session?.user;

	return (
		<div className="text-center">
			<div className="mx-auto mb-6">
				{image ? (
					<Image
						src={image}
						alt="avatar"
						className="rounded-full mx-auto"
						width={128}
						height={128}
					/>
				) : (
					<UserCircleIcon
						className="w-32 h-32 rounded-full text-gray-300"
						aria-hidden="true"
					/>
				)}
			</div>
			<h1 className="text-lg font-semibold">{name}</h1>
			<h2 className=" text-neutral-500">{email}</h2>
			<AccountMenu />
		</div>
	);
}
