import Headline from "@/app/account/_components/Headline";
import GameForm from "@/app/account/_forms/GameForm";
import { authOptions } from "@/lib/authOptions";
import { Game } from "@/types/game";
import { getServerSession } from "next-auth";

export default async function Create() {
	const session = await getServerSession(authOptions);

	if (!session) return;

	const defaultValues: Game = {
		id: undefined,
		private: false,
		title: "",
		description: "",
		createdAt: new Date(),
		userId: session.user.id,
	};

	return (
		<>
			<Headline title="Create new content" backTo={"/account/content"} />
			<GameForm defaultValues={defaultValues} />
		</>
	);
}
