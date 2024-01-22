"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function gameAction(prevState: any, formData: FormData) {
	const session = await getServerSession(authOptions);
	const currentUserId = session?.user?.id;

	if (!session) return;

	const schema = z.object({
		id: z.string(),
		private: z.boolean(),
		title: z.string().min(3),
		description: z.string().min(5),
	});

	const parse = schema.safeParse({
		id: formData.get("id"),
		private: formData.get("private") === "on" ? true : false,
		title: formData.get("title"),
		description: formData.get("description"),
	});

	if (!parse.success) {
		return { errors: parse.error.errors };
	}

	const data = parse.data;

	const requestData = {
		id: data.id,
		userId: currentUserId,
		private: data.private,
		title: data.title,
		description: data.description,
		createdAt: new Date(),
	};

	try {
		// update
		if (requestData.id) {
			const ref = doc(db, "games", requestData.id);
			await setDoc(ref, requestData, { merge: true });

			revalidatePath("/account/content");
			return { message: `Game edited succesfully!` };
		}

		// create
		if (!requestData.id) {
			const { id, ...dataWithoutId } = requestData;
			const gamesCollection = collection(db, "games");
			await addDoc(gamesCollection, dataWithoutId);

			revalidatePath("/account/content");
			return { message: `Game created succesfully!` };
		}
	} catch (e) {
		return { status: "failed", message: "Upps, something went wrong..." };
	}
}
