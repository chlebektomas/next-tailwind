"use client";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Dialog } from "@headlessui/react";
import { Link } from "lucide-react";
import { useState } from "react";

interface ResponsiveMenuProps {
	links: {
		name: string;
		href: string;
	}[];
}

export default function ResponsiveMenu({ links }: ResponsiveMenuProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<>
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
		</>
	);
}
