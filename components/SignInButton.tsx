"use client";

import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";

export function SignInButton() {
	const { data: session, status } = useSession();

	if (status === "authenticated") {
		return (
			<Link href="/account" className="w-[32px] h-[32px] relative">
				<Image
					src={session.user?.image ?? "/avatar.svg"}
					className="rounded-full"
					alt="avatar"
					fill
				/>
			</Link>
		);
	}

	return (
		<button type="button" className="button-primary" onClick={() => signIn()}>
			Sign in
		</button>
	);
}
