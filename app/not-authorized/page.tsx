import Link from "next/link";

export default function NotAuthorized() {
	return (
		<main className="fixed w-screen h-screen left-0 top-0 flex items-center justify-center pointer-events-none">
			<div className="text-center">
				<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-gradient max-w-2xl">
					Sorry, you are not authorized to view this page.
				</h1>
				<div className="mt-10 flex justify-center">
					<Link href="/" className="button-primary pointer-events-auto">
						Go home
					</Link>
				</div>
			</div>
		</main>
	);
}
