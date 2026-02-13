import Image from 'next/image';

export default function WhyShipWithUs() {
	const benefits = [
		{
			title: 'Innovative solutions for reliability & speed',
			description:
				"Whether it's across states or worldwide, we prioritize the secure and swift arrival of your shipments.",
		},
		{
			title: 'Premium shipping at professional rates',
			description:
				'When you need reliable delivery and careful handling, trust FedEx to get your items where they need to go on time.',
		},
		{
			title: 'We ship everywhere*',
			description:
				'From major cities to remote locations, your goods can reach worldwide.',
		},
		{
			title: 'FedEx can ship for less than the Post Office',
			description: 'Two-day shipping, one flat rate. FedEx One Rate	.',
		},
	];

	return (
		<section className="px-4 sm:px-6 md:px-16 lg:px-40 -mt-16">
			<div className="max-w-7xl mx-auto bg-[#f6f5f5] py-6">
				<div className="grid md:grid-cols-2 gap-12 items-center  md:p-6 p-2  py-10">
					{/* Left Content */}
					<div>
						<h2 className="text-4xl text-gray-900 mb-8">
							Why ship with FedEx?
						</h2>
						{/* Right Image */}
						<div className="relative  md:hidden h-80 lg:h-full mb-16">
							<Image
								src="/images/fedex.jpg"
								alt="FedEx delivery driver"
								fill
								className="object-cover rounded-lg"
								priority
							/>
						</div>

						{/* Benefits Grid */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
							{benefits.map((benefit, index) => (
								<div key={index}>
									<h3 className="font-bold text-gray-700 mb-2">
										{benefit.title}
									</h3>
									<p className="text-[17px] leading-6 font-light">
										{benefit.description}
									</p>
								</div>
							))}
						</div>

						{/* Footnotes */}
						<div className="mt-8 text-xs text-gray-600 space-y-1">
							<p>*FedEx doesn&apos;t ship anywhere sanctioned by the U.S.</p>
							<p>
								**Exclusions apply. Visit the FedEx One Rate page to learn more.
							</p>
						</div>
					</div>

					{/* Right Image */}
					<div className="relative hidden md:block h-80 lg:h-full">
						<Image
							src="/images/fedex.jpg"
							alt="FedEx delivery driver"
							fill
							className="object-cover rounded-lg"
							priority
						/>
					</div>
				</div>
				{/* CTA Button */}

				<div className="flex justify-center mb-4">
					<button className="px-12 py-3 border-2 border-orange-500 text-orange-500 font-bold hover:bg-orange-50 transition-colors">
						START TRACKING NOW
					</button>
				</div>
			</div>
		</section>
	);
}
