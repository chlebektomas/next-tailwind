import Skeleton from "@/components/ui/Skeleton";

export default function Loading() {
	return (
		<section className="max-w-7xl mx-auto p-6 flex flex-col gap-3">
			<Skeleton className="w-md" />
			<Skeleton className="w-1/3 h-7" />
		</section>
	);
}
