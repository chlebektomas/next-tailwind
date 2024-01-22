import Headline from "@/app/account/_components/Headline";
import ProfileForm from "@/app/account/_forms/ProfileForm";
import { authOptions } from "@/lib/authOptions";
import { UserProfile } from "@/types/user";
import { getServerSession } from "next-auth";

export default async function Profile() {
	const session = await getServerSession(authOptions);

	const defaultValues: UserProfile = {
		private: session?.user.profile?.private || false,
		title: session?.user.profile?.title || "",
		description: session?.user.profile?.description || "",
	};

	return (
		<>
			<Headline
				title="Profile"
				description="This informations will be displayed publicly so be careful what you share."
				backTo="/account"
			/>
			<ProfileForm defaultValues={defaultValues} />
		</>
	);
}
