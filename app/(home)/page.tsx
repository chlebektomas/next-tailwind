import Hero from "@/app/(home)/_components/Hero";
import Cards from "@/app/(home)/_components/Cards";
import UpSell from "@/app/(home)/_components/UpSell";
import Footer from "@/app/(home)/_components/Footer";

export default function Home() {
	return (
		<main>
			<Hero />
			<Cards />
			<UpSell />
			<Footer />
		</main>
	);
}
