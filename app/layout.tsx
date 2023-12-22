import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import AuthProvider from "./AuthProvider";
import NavigationMenu from "@/app/_components/NavigationMenu";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Next.js + Tailwind CSS with Firebase",
	description: "Created by Tomas Chlebek",
};

export default async function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body suppressHydrationWarning className="min-h-screen main-bg">
				<AuthProvider>
					<NavigationMenu />
					{children}
					<Toaster />
				</AuthProvider>
			</body>
		</html>
	);
}
