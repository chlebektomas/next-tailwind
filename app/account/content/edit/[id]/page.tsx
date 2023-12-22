import Headline from "@/components/ui/Headline";
import GameForm from "@/components/GameForm/GameForm";
import { getGameByUserId } from "@/lib/firestore";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { Game } from "@/types/game";

async function Edit({ params }: { params: { id: string } }) {
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

export default Edit;
