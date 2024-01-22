import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AccountLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const session = await getServerSession(authOptions);

	if (!session) redirect("/api/auth/signin");

	return (
		<section className="mx-auto max-w-2xl w-full mt-4 mb-12 p-6">
			{children}
		</section>
	);
}
