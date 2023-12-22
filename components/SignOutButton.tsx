"use client";

import { signOut } from "next-auth/react";
import { useToast } from "./ui/useToast";
import { useRouter } from "next/navigation";
import { ArrowRightStartOnRectangleIcon } from "@heroicons/react/20/solid";

export function SignOutButton() {
	const router = useRouter();
	const { toast } = useToast();

	const handleSignOut = () => {
		router.replace("/");
		signOut({ redirect: false }).then(() => {
			toast({
				title: "You are signed out.",
			});
		});
	};

	return (
		<button className="account-menu-link mt-5 w-full" onClick={handleSignOut}>
			<ArrowRightStartOnRectangleIcon className="h-5 w-5" aria-hidden="true" />
			Sign out
		</button>
	);
}
