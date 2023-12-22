import Link from "next/link";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "About",
	description: "Created by Tomas Chlebek",
};

export default function About() {
	return (
		<section className="mx-auto max-w-7xl pt-24 text-center">
			<h1 className="text-3xl md:text-5xl font-bold text-gradient">About</h1>
			<div className="flex justify-center mt-5">
				<Link
					href="https://www.linkedin.com/in/tomaschlebek/"
					target="_blank"
					className="button-primary"
				>
					LinkedIn profile
					<ArrowTopRightOnSquareIcon
						className="h-4 w-4 ml-1"
						aria-hidden="true"
					/>
				</Link>
			</div>
		</section>
	);
}
