"use client";

import { signIn, useSession } from "next-auth/react";
import Spinner from "../ui/Spinner";

export default function AuthCheck({ children }: { children: React.ReactNode }) {
	const { status } = useSession();

	return (
		<>
			{status === "loading" && <Spinner />}
			{status === "unauthenticated" && (
				<div className="w-full text-center">
					<p className="">Sorry, this is protected route.</p>
					<button
						onClick={() => signIn()}
						className="button-primary inline-block mt-2"
					>
						Sign in
					</button>
				</div>
			)}
			{status === "authenticated" && children}
		</>
	);
}
