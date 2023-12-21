"use client";

import Headline from "@/components/ui/Headline";
import GameForm from "@/components/forms/GameForm";
import Spinner from "@/components/ui/Spinner";
import { toast } from "@/components/ui/useToast";
import { getGameByUserId } from "@/lib/firestore";
import { Game } from "@/types/game";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

function Edit({ params }: { params: { id: string } }) {
	const { data: session } = useSession();
	const [game, setGame] = useState<Game>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchGame = async () => {
			try {
				if (!session) return;
				const response = await getGameByUserId(session.user.id, params.id);
				if (response) {
					setGame(response);
				}
			} catch (error) {
				toast({
					title: String(error),
					variant: "destructive",
				});
			} finally {
				setLoading(false);
			}
		};

		fetchGame();
	}, [params.id, session]);

	if (loading) {
		return <Spinner />;
	}

	return (
		<>
			<Headline title={`Edit ${game?.title}`} backTo="/account/content" />
			<GameForm mode="edit" data={game} />
		</>
	);
}

export default Edit;
