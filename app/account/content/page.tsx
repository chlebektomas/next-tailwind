import Headline from "@/app/account/_components/Headline";
import { PlusIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { getGamesByUserId } from "@/lib/firestore";
import GameList from "@/app/account/_components/GameList";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/authOptions";

export default async function Content() {
	const session = await getServerSession(authOptions);

	if (!session) return;

	const games = await getGamesByUserId(session.user.id);

	return (
		<>
			<Headline
				title="Your content"
				description="Your content is what you want to share with your audience."
				action={
					<Link className="button-primary-icon" href="/account/content/create">
						<PlusIcon className="w-5 mr-1" title="Add new content" />
						Add new content
					</Link>
				}
				backTo="/account"
			/>
			<GameList games={games} />
		</>
	);
}
