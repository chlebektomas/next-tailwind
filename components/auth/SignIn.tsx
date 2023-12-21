"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

function SignIn() {
	const { data: session, status } = useSession();

	const handleSignIn = () => {
		signIn();
	};

	return (
		<div className="lg:flex lg:flex-1 lg:justify-end">
			{status === "authenticated" && (
				<Link href="/account" className="w-[32px] h-[32px] relative">
					<Image
						src={session.user?.image ?? "/avatar.svg"}
						className="rounded-full"
						alt="avatar"
						fill
					/>
				</Link>
			)}
			{status === "unauthenticated" && (
				<button type="button" className="button-primary" onClick={handleSignIn}>
					Sign in
				</button>
			)}
		</div>
	);
}

export default SignIn;
