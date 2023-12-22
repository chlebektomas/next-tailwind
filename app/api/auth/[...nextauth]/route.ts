import NextAuth from "next-auth";
import type { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { firestore } from "@/lib/firestore";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export const authOptions: NextAuthOptions = {
	adapter: firestore,
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_ID!,
			clientSecret: process.env.GOOGLE_SECRET!,
		}),
	],
	callbacks: {
		async session({ session, user }) {
			session.user.id = user.id;
			session.user.createdAt = user.createdAt;
			session.user.profile = user.profile;

			return session;
		},
		async signIn({ user }) {
			const uid = user.id;
			const userRef = doc(db, "users", uid);
			const snapshot = await getDoc(userRef);
			const createdAt = new Date();

			if (!snapshot.exists()) {
				user.createdAt = createdAt;
				user.profile = {
					private: false,
					title: "",
					description: "",
				};
			}

			return true;
		},
	},
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
