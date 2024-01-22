import Headline from "@/app/account/_components/Headline";
import GameForm from "@/app/account/_forms/GameForm";
import { getGameByUserId } from "@/lib/firestore";
import { getServerSession } from "next-auth";
import { Game } from "@/types/game";
import { authOptions } from "@/lib/authOptions";

export default async function Edit({ params }: { params: { id: string } }) {
	const session = await getServerSession(authOptions);

	if (!session) return;

	const game = await getGameByUserId(session.user.id, params.id);

	const defaultValues: Game = {
		id: game.id,
		private: game.private,
		title: game.title,
		description: game.description,
		createdAt: game.createdAt,
		userId: session.user.id,
	};

	return (
		<>
			<Headline title={`Edit ${game?.title}`} backTo="/account/content" />
			<GameForm defaultValues={defaultValues} />
		</>
	);
}
