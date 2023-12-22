import { getGames } from "@/lib/firestore";
import { Game } from "@/types/game";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
	const games: Game[] = await getGames();

	return (
		<main className="max-w-7xl mx-auto p-6 ">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{games.map((game) => (
					<Link
						href={`/game/${game.id}`}
						key={game.id}
						className="w-full shadow-xl shadow-black rounded-xl group hover:cursor-pointer bg-[#1E1E20]"
					>
						<div className="aspect-video relative overflow-hidden rounded-t-xl">
							<Image
								src="https://i.pinimg.com/originals/9a/2c/1c/9a2c1c428752523b0a8c6a5cb65a386e.jpg"
								alt={game.title}
								className="opacity-75 group-hover:opacity-100  group-hover:scale-110 transition-all duration-300"
								width={293}
								height={165}
								priority
							/>
						</div>
						<h2 className="lg:text-xl font-light first-letter:uppercase p-3 opacity-75 group-hover:opacity-100 text-white transition-all text-center overflow-hidden overflow-ellipsis whitespace-nowrap">
							{game.title}
						</h2>
					</Link>
				))}
			</div>
		</main>
	);
}
