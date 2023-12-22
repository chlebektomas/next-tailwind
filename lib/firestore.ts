import { FirestoreAdapter } from "@auth/firebase-adapter";
import { cert } from "firebase-admin/app";
import {
	collection,
	doc,
	getDoc,
	getDocs,
	orderBy,
	query,
	where,
} from "firebase/firestore";
import { db } from "./firebase";
import { cache } from "react";
import { Game } from "@/types/game";
import { notFound, redirect } from "next/navigation";

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

export const getGameById = cache(async (id: string): Promise<Game> => {
	try {
		const ref = doc(db, "games", id);
		const snapShot = await getDoc(ref);

		if (!snapShot.exists()) {
			notFound();
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
				notFound();
			}

			const data = snapShot.data();

			if (data.userId !== userId) {
				redirect("/not-authorized");
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
