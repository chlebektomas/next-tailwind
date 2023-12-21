export interface User {
	id: string;
	name: string;
	email: string;
	image: string;
	profile: UserProfile;
}

export interface UserProfile {
	private: boolean;
	title: string;
	description: string;
}
