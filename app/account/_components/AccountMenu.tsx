import Link from "next/link";
import {
	ArrowRightIcon,
	UserCircleIcon,
	SquaresPlusIcon,
	WalletIcon,
} from "@heroicons/react/20/solid";
import { SignOutButton } from "@/components/SignOutButton";

const menu = [
	{
		name: "Profile",
		href: "/account/profile",
		icon: UserCircleIcon,
	},

	{
		name: "Content",
		href: "/account/content",
		icon: SquaresPlusIcon,
	},
	{
		name: "Billing",
		href: "/account/billing",
		icon: WalletIcon,
	},
];

export default function AccountMenu() {
	return (
		<div className="sm:w-96 mx-auto mt-10 ">
			<ul className="space-y-4">
				{menu.map((link) => (
					<li key={link.href}>
						<Link href={link.href} className="account-menu-link">
							<link.icon className="h-5 w-5" aria-hidden="true" />
							{link.name}
							<ArrowRightIcon className="w-4 ml-auto" />
						</Link>
					</li>
				))}
			</ul>
			<hr className="mt-5 border-neutral-700" />
			<SignOutButton />
		</div>
	);
}
