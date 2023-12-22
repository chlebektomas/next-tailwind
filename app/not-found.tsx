import Link from "next/link";

export default function NotFound() {
	return (
		<main className="fixed w-screen h-screen left-0 top-0 flex items-center justify-center pointer-events-none">
			<div className="text-center">
				<p className="text-base font-semibold">404</p>
				<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-gradient">
					Page not found
				</h1>
				<p className="mt-6 text-base leading-7 text-neutral-400">
					Sorry, we couldn’t find the page you’re looking for.
				</p>
				<div className="mt-10 flex justify-center">
					<Link href="/" className="button-primary pointer-events-auto">
						Go home
					</Link>
				</div>
			</div>
		</main>
	);
}
