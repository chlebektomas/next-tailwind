"use client";

import AuthCheck from "@/components/auth/AuthCheck";

export default function AccountLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<AuthCheck>
			<section className="mx-auto max-w-2xl w-full mt-4 mb-12 p-6">
				{children}
			</section>
		</AuthCheck>
	);
}
