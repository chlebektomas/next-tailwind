"use client";

function Error() {
	return (
		<main className="fixed w-screen h-screen left-0 top-0 flex items-center justify-center pointer-events-none">
			<div className="text-center">
				<h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl text-gradient max-w-2xl">
					Upps, something went wrong. Please try again later.
				</h1>
			</div>
		</main>
	);
}

export default Error;
