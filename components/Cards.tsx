import Card from "./Card";
import {
	LockClosedIcon,
	ArrowPathIcon,
	FingerPrintIcon,
	ShieldCheckIcon,
} from "@heroicons/react/24/outline";

const data = [
	{
		icon: LockClosedIcon,
		title: "Push to deploy",
		description:
			"Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.",
	},
	{
		icon: ArrowPathIcon,
		title: "SSL certificates",
		description:
			"Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.",
	},
	{
		icon: FingerPrintIcon,
		title: "Simple queues",
		description:
			"Quisque est vel vulputate cursus. Risus proin diam nunc commodo. Lobortis auctor congue commodo diam neque.",
	},
	{
		icon: ShieldCheckIcon,
		title: "Advanced security",
		description:
			"Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt mattis aliquet hac quis. Id hac maecenas ac donec pharetra eget.",
	},
];

function Cards() {
	return (
		<section className="py-12 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<h2 className="mt-2 text-3xl font-bold tracking-tight text-gradient sm:text-4xl">
						Everything you need to deploy your app
					</h2>
					<p className="mt-6 md:text-lg leading-8 text-gray-300">
						Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
						Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
						In mi viverra elit nunc.
					</p>
				</div>
				<div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{data.map((card) => (
							<Card
								key={card.title}
								icon={<card.icon className="h-6 w-6" />}
								title={card.title}
								description={card.description}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Cards;
