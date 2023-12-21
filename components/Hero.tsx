"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

function Hero() {
	const handleSignIn = () => {
		signIn();
	};

	return (
		<section className="overflow-hidden">
			<div className="mx-auto max-w-7xl px-6 lg:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-20">
					<div className="flex flex-col justify-center md:max-w-xl">
						<h1 className="text-3xl md:text-5xl font-bold text-gradient">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
						</h1>
						<p className="mt-6 md:text-lg leading-8 text-gray-300">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
							impedit perferendis suscipit eaque, iste dolor cupiditate
							blanditiis ratione.
						</p>
						<div className="flex mt-5 gap-4">
							<button
								onClick={handleSignIn}
								className="button-primary text-base"
							>
								Get started
							</button>
							<Link href="/games" className="button text-base">
								GameZZzzz
							</Link>
						</div>
					</div>
					<Image
						src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
						alt="Product screenshot"
						className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
						width="2432"
						height="1442"
					/>
				</div>
			</div>
		</section>
	);
}

export default Hero;
