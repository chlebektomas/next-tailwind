import Link from "next/link";
import ResponsiveMenu from "./ResponsiveMenu";
import { SignInButton } from "@/components/SignInButton";

const links = [
	{
		name: "Games",
		href: "/games",
	},
	{
		name: "Pricing",
		href: "/pricing",
	},
	{
		name: "About",
		href: "/about",
	},
];

export default function NavigationMenu() {
	return (
		<nav
			className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
			aria-label="Global"
		>
			<div className="flex lg:flex-1">
				<Link
					href="/"
					className="-m-1.5 p-1.5 text-gradient uppercase font-bold text-2xl"
				>
					LOGO
				</Link>
			</div>

			<ResponsiveMenu links={links} />

			<div className="hidden lg:flex lg:gap-x-12">
				{links.map((link, i) => (
					<Link key={i} href={link.href} className="navigation-link">
						{link.name}
					</Link>
				))}
			</div>

			<div className="lg:flex lg:flex-1 lg:justify-end">
				<SignInButton />
			</div>
		</nav>
	);
}
