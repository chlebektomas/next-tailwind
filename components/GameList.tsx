"use client";

import Image from "next/image";
import { Game } from "@/types/game";
import { PlusIcon, EyeIcon, EyeSlashIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

interface GameListProps {
	games: Game[];
}

function GameList({ games }: GameListProps) {
	return (
		<div className="space-y-3 mt-10">
			{games.length === 0 && <h2>You don&#39;t have any content yet...</h2>}
			{games.map((game: Game) => {
				return (
					<div
						key={game.id}
						className="w-full flex items-center rounded-md p-2 ring-1 ring-neutral-600"
					>
						<div className="aspect-video relative overflow-hidden rounded-sm w-40 sm:w-1/6 ">
							<Image
								src="https://i.pinimg.com/originals/9a/2c/1c/9a2c1c428752523b0a8c6a5cb65a386e.jpg"
								alt={game.title}
								fill
							/>
						</div>
						<div className="flex flex-col gap-2 px-3">
							<h2 className="w-52 sm:w-full font-light first-letter:uppercase overflow-hidden overflow-ellipsis whitespace-nowrap mb-auto">
								{game.title}
							</h2>
							<div className="flex gap-2 items-center mt-auto">
								<div className="">
									{game.private ? (
										<EyeSlashIcon
											title="Private"
											className="w-5 text-red-600"
										/>
									) : (
										<EyeIcon title="Public" className="w-5 text-green-500" />
									)}
								</div>
								<div className="text-sm text-neutral-400 whitespace-nowrap">
									{game.createdAt && formatDate(game.createdAt)}
								</div>
							</div>
						</div>
						<Link
							href={`/account/content/edit/${game.id}`}
							className="button-primary ml-auto"
						>
							Edit
						</Link>
					</div>
				);
			})}
		</div>
	);
}

export default GameList;
