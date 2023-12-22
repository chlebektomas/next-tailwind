const data = [
	{
		title: "Transactions every 24 hours",
		number: "44 million",
	},
	{
		title: "Assets under holding",
		number: "$119 trillion",
	},
	{
		title: "New users annually",
		number: "46,000",
	},
];

export default function UpSell() {
	return (
		<section className="main-bg py-12 sm:py-24">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
					{data.map((item) => (
						<div
							key={item.title}
							className="mx-auto flex max-w-xs flex-col gap-y-4"
						>
							<dt className="text-base leading-7 text-gray-50">{item.title}</dt>
							<dd className="order-first text-3xl font-semibold tracking-tight text-gray-50 sm:text-5xl">
								{item.number}
							</dd>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
