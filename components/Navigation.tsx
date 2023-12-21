"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import SignIn from "./auth/SignIn";

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

function Navigation() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header>
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

				<div className="flex ml-auto lg:hidden">
					<button
						type="button"
						className="mr-4"
						onClick={() => setMobileMenuOpen(true)}
					>
						<span className="sr-only">Open main menu</span>
						<Bars3Icon className="h-9 w-9 text-white" aria-hidden="true" />
					</button>
				</div>

				<div className="hidden lg:flex lg:gap-x-12">
					{links.map((link, i) => (
						<Link key={i} href={link.href} className="navigation-link">
							{link.name}
						</Link>
					))}
				</div>

				<SignIn />
			</nav>

			<Dialog
				as="div"
				className="lg:hidden"
				open={mobileMenuOpen}
				onClose={setMobileMenuOpen}
			>
				<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#1E1E20] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
					<div className="flex items-center justify-between">
						<a href="#" className="-m-1.5 p-1.5">
							<span className="sr-only">Your company</span>
							<Link
								href="/"
								className="-m-1.5 p-1.5 text-gradient uppercase font-bold text-2xl"
							>
								LOGO
							</Link>
						</a>
						<button type="button" onClick={() => setMobileMenuOpen(false)}>
							<span className="sr-only">Close menu</span>
							<XMarkIcon className="h-9 w-9" aria-hidden="true" />
						</button>
					</div>

					{links.map((link, i) => (
						<Link
							key={i}
							href={link.href}
							className="block py-3 text-center"
							onClick={() => setMobileMenuOpen(false)}
						>
							{link.name}
						</Link>
					))}
				</Dialog.Panel>
			</Dialog>
		</header>
	);
}

export default Navigation;
