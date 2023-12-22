import Headline from "@/components/ui/Headline";
import ProfileForm from "@/components/ProfileForm/ProfileForm";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { UserProfile } from "@/types/user";
import { getServerSession } from "next-auth";

async function Profile() {
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

export default Profile;
