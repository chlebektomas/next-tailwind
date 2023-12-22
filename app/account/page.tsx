import Image from "next/image";
import { UserCircleIcon } from "@heroicons/react/20/solid";
import Menu from "@/components/Menu";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function Account() {
	const session = await getServerSession(authOptions);
	const { image, name, email } = session?.user!;

	return (
		<div className="text-center">
			<div className="avatar avatar-md w-32 h-32 mx-auto mb-6 rounded-full relative">
				{image ? (
					<Image src={image} alt="avatar" className="rounded-full" fill />
				) : (
					<UserCircleIcon
						className="h-full w-full text-gray-300"
						aria-hidden="true"
					/>
				)}
			</div>
			<h1 className="text-lg font-semibold">{name}</h1>
			<h2 className=" text-neutral-500">{email}</h2>
			<Menu />
		</div>
	);
}

export default Account;
