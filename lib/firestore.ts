import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import {
	addDoc,
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	setDoc,
	where,
} from "firebase/firestore";
import { db } from "./firebase";
import { cache } from "react";
import { Game } from "@/types/game";
import { UserProfile } from "@/types/user";

export const firestore = FirestoreAdapter({
	credential: cert({
		projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
		clientEmail: process.env.NEXT_PUBLIC_FIREBASE_CLIENT_EMAIL,
		privateKey: process.env.NEXT_PUBLIC_FIREBASE_PRIVATE_KEY!.replace(
			/\\n/g,
			"\n"
		),
	}),
});

export const updateUserProfile = async (
	userId: string,
	userData: UserProfile
): Promise<UserProfile> => {
	try {
		const ref = doc(db, "users", userId);

		const profile = {
			profile: {
				private: userData.private,
				title: userData.title,
				description: userData.description,
			},
		};

		await setDoc(ref, profile, { merge: true });

		return { ...userData };
	} catch (error) {
		console.error("Error updating game: ", error);
		throw error;
	}
};

export const createGame = async (gameData: Game): Promise<Game> => {
	try {
		const { id, ...dataWithoutId } = gameData;
		const gamesCollection = collection(db, "games");
		const docRef = await addDoc(gamesCollection, dataWithoutId);

		return { id: docRef.id, ...dataWithoutId };
	} catch (error) {
		console.error("Error creating game: ", error);
		throw error;
	}
};

export const updateGame = async (
	userId: string,
	gameData: Game
): Promise<Game> => {
	try {
		const { id, ...dataWithoutId } = gameData;

		if (typeof id !== "string") {
			throw new Error("ID must be a string");
		}

		const ref = doc(db, "games", id);

		const snapShot = await getDoc(ref);

		if (!snapShot.exists()) {
			throw new Error("Game not found");
		}

		const data = snapShot.data();

		if (data.userId !== userId) {
			throw new Error("Unauthorized access");
		}

		await setDoc(ref, dataWithoutId, { merge: true });

		return { id, ...dataWithoutId };
	} catch (error) {
		console.error("Error updating game: ", error);
		throw error;
	}
};

export const getGameById = cache(async (id: string): Promise<Game> => {
	try {
		const ref = doc(db, "games", id);
		const snapShot = await getDoc(ref);

		if (!snapShot.exists()) {
			throw new Error("Game not found");
		}

		const data = snapShot.data();
		const game: Game = {
			id: ref.id,
			userId: data.userId,
			private: data.private,
			title: data.title,
			description: data.description,
			createdAt: data.createdAt.toDate(),
		};

		return game;
	} catch (error) {
		console.error("Error getting game detail:", error);
		throw error;
	}
});

export const getGameByUserId = cache(
	async (userId: string, gameId: string): Promise<Game> => {
		try {
			const ref = doc(db, "games", gameId);
			const snapShot = await getDoc(ref);

			if (!snapShot.exists()) {
				throw new Error("Game not found");
			}

			const data = snapShot.data();

			if (data.userId !== userId) {
				throw new Error("Unauthorized access");
			}

			const game: Game = {
				id: ref.id,
				userId: data.userId,
				private: data.private,
				title: data.title,
				description: data.description,
				createdAt: data.createdAt.toDate(),
			};

			return game;
		} catch (error) {
			console.error("Error getting game detail:", error);
			throw error;
		}
	}
);

export const getGames = async (): Promise<Game[]> => {
	try {
		const ref = collection(db, "games");
		const q = query(
			ref,
			orderBy("createdAt", "desc"),
			where("private", "==", false)
		);

		const snapShot = await getDocs(q);
		const list: Game[] = snapShot.docs.map((doc) => {
			const data = doc.data();
			return {
				id: doc.id,
				userId: data.userId,
				private: data.private,
				title: data.title,
				description: data.description,
				createdAt: data.createdAt.toDate(),
			};
		});

		return list;
	} catch (error) {
		console.error("Error getting games:", error);
		throw error;
	}
};

export const getGamesByUserId = async (id: string): Promise<Game[]> => {
	try {
		const ref = collection(db, "games");
		const q = query(
			ref,
			orderBy("createdAt", "desc"),
			where("userId", "==", id)
		);

		const snapShot = await getDocs(q);
		const list: Game[] = snapShot.docs.map((doc) => {
			const data = doc.data();
			return {
				id: doc.id,
				userId: data.userId,
				private: data.private,
				title: data.title,
				description: data.description,
				createdAt: data.createdAt.toDate(),
			};
		});

		return list;
	} catch (error) {
		console.error("Error getting games:", error);
		throw error;
	}
};

function auth() {
	throw new Error("Function not implemented.");
}
// GET SNAPSHOT
// export const getGamesSnapshot = (
// 	cb: (data: { id: string }[]) => void
// ): (() => void) => {
// 	try {
// 		const ref = collection(db, "games");
// 		const q = query(ref, orderBy("createdAt", "desc"));

// 		const unsubscribe = onSnapshot(q, (snapshot) => {
// 			const list = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
// 			cb(list);
// 		});

// 		return unsubscribe;
// 	} catch (error) {
// 		console.error("Error getting games:", error);
// 		throw error;
// 	}
// };

// Usage SNAPSHOT
// useEffect(() => {
// 	try {
// 		const unsubscribe = getGamesSnapshot((data: Game[]) => {
// 			setGames(data);
// 			setLoading(false);
// 		});
// 		return () => {
// 			unsubscribe();
// 		};
// 	} catch (error) {
// 		toast({
// 			title: "Upps, something went wrong.",
// 			variant: "destructive",
// 		});
// 	}
// }, []);
