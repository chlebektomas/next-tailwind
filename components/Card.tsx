interface CardProps {
	icon: React.ReactNode;
	title: string;
	description: string;
}

function Card({ icon, title, description }: CardProps) {
	return (
		<div className="p-6 bg-[#1d1c20] ring-1 ring-transparent-color rounded-lg flex">
			<div className="bg-neutral-700 rounded-lg p-2 self-start mr-6">
				{icon}
			</div>
			<div>
				<h5 className="text-base font-semibold text-gradient">{title}</h5>
				<p className="mt-2 text-base leading-7 text-gray-300">{description}</p>
			</div>
		</div>
	);
}

export default Card;
