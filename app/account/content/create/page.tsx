import Headline from "@/components/ui/Headline";
import GameForm from "@/components/GameForm/GameForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { Game } from "@/types/game";
import { getServerSession } from "next-auth";

async function Create() {
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

export default Create;
