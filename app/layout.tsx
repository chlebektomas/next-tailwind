import "./globals.css";
import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import AuthProvider from "./AuthProvider";
import { Toaster } from "@/components/ui/toaster";

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
					<Navigation />
					{children}
					<Toaster />
				</AuthProvider>
			</body>
		</html>
	);
}
