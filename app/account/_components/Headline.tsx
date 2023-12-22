import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import React from "react";

interface HeadlineProps {
	backTo: string;
	title: string;
	description?: string;
	action?: React.ReactNode;
}

export default function Headline({
	backTo,
	title,
	description,
	action,
}: HeadlineProps) {
	return (
		<>
			<h1 className="font-semibold text-xl flex items-center gap-2">
				<Link href={backTo}>
					<ArrowLeftIcon className="w-6 cursor-pointer hover:text-neutral-400" />
				</Link>
				{title}
				{action && <div className="ml-auto">{action}</div>}
			</h1>
			{description && <p className="input-description">{description}</p>}
		</>
	);
}
