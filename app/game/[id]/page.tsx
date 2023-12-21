import { getGameById } from "@/lib/firestore";
import { Game } from "@/types/game";

async function Game({ params }: { params: { id: string } }) {
	const game: Game = await getGameById(params.id);
	const { title, description } = game;

	return (
		<main className="max-w-7xl mx-auto p-6 ">
			<h1 className="text-3xl font-bold tracking-tight sm:text-5xl text-gradient uppercase">
				{title}
			</h1>
			{description && (
				<p className="mt-6 text-base leading-7 text-neutral-400">
					{description}
				</p>
			)}
		</main>
	);
}

export default Game;
