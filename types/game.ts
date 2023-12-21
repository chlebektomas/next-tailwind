export interface Game {
	id?: string;
	private: boolean;
	title: string;
	description: string;
	createdAt: Date;
	userId: string;
}
