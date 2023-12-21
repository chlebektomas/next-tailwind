import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function Loading() {
	return (
		<section className="max-w-7xl mx-auto p-6">
			<div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
				{Array.from({ length: 12 }).map((_, i) => (
					<div
						key={i}
						className="flex flex-col lg:flex-1 rounded-xl shadow-xl shadow-black"
					>
						<Skeleton className="w-full aspect-video rounded-t-xl rounded-b-none" />
						<Skeleton key={i} className="w-1/3 h-7 m-3  mx-auto" />
					</div>
				))}
			</div>
		</section>
	);
}

export default Loading;
