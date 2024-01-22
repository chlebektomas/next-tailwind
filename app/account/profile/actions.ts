"use server";

import { authOptions } from "@/lib/authOptions";
import { db } from "@/lib/firebase";
import { doc, setDoc } from "firebase/firestore";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

export async function updateProfileAction(prevState: any, formData: FormData) {
	const session = await getServerSession(authOptions);

	if (!session) return;

	const schema = z.object({
		private: z.boolean(),
		title: z.string().min(3),
		description: z.string().min(5),
	});

	const parse = schema.safeParse({
		private: formData.get("private") === "on" ? true : false,
		title: formData.get("title"),
		description: formData.get("description"),
	});

	if (!parse.success) {
		return { errors: parse.error.errors };
	}

	const data = parse.data;

	const requestData = {
		profile: {
			private: data.private,
			title: data.title,
			description: data.description,
		},
	};

	try {
		const ref = doc(db, "users", session.user.id);
		await setDoc(ref, requestData, { merge: true });

		revalidatePath("/account/profile");
		return { message: `Profile updated succesfully!` };
	} catch (e) {
		return { status: "failed", message: "Upps, something went wrong..." };
	}
}
