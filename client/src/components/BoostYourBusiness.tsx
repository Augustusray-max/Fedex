import Image from 'next/image';
import Link from 'next/link';

export default function BoostYourBusiness() {
	const features = [
		{
			title: 'Make the most of returns',
			description:
				"They're an unavoidable part of doing business. But companies who do returns right have more repeat customers. Explore ways to make them an easy, loyalty-building experience, including QR codes and no-box, no-label options.",
			cta: 'VIEW RETURNS OPTIONS',
			image: '/images/return.jpg',
		},
		{
			title: 'Shipping that packs the perks',
			description:
				"Be sure you're being rewarded when you ship with us! Join FedEx Rewards to earn gift cards from name-brand retailers.* You get a $10 gift card for your first eligible shipment. It all starts with a FedEx account.",
			cta: 'OPEN A FREE ACCOUNT',
			image: '/images/Rewards.jpg',
		},
		{
			title: 'Use data to differentiate',
			description:
				"Try the data-driven suite of tools that's reshaping logistics intelligence for businesses. From enhanced visibility to predictive insights and refined customer experiences, this new digital suite of solutions is designed for businesses that think big—helping you ship smarter, move faster, and grow stronger.",
			cta: 'EXPLORE NOW',
			image: '/images/Data.jpg',
		},
	];

	return (
		<section className="md:px-16 px-6 py-16 -mt-20">
			<div className="max-w-6xl mx-auto">
				{/* Headline */}
				<h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-16 text-center">
					Boost your business with every shipment
				</h2>

				{/* Features */}
				<div className="space-y-10 mb-16">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col md:flex-row gap-8 items-center"
						>
							{/* Image */}
							<div className="md:w-2/9 w-full shrink-0">
								<Image
									src={feature.image || '/placeholder.svg'}
									alt={feature.title}
									width={300}
									height={300}
									className="w-full h-auto object-cover"
								/>
							</div>

							{/* Content */}
							<div className="">
								<h3 className="text-2xl font-light text-gray-950 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-500 mb-2 font-normal leading-relaxed">
									{feature.description}
								</p>
								<Link
									href="#"
									className="text-blue-600 hover:text-blue-700 font-semibold text-sm tracking-wide"
								>
									{feature.cta}
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Bottom Info Section */}
				<div className="border-t border-gray-300 pt-10 space-y-8">
					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-2">
							FedEx rate and surcharge changes
						</h4>
						<p className="text-gray-600">
							Learn more about{' '}
							<Link href="#" className="underline hover:text-blue-400">
								rate and surcharge changes
							</Link>
							—last updated 2/2/2026.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-2">
							FedEx money-back guarantee
						</h4>
						<p className="text-gray-600">
							We offer a money-back guarantee for select services. This
							guarantee may be suspended, modified, or revoked. Please check{' '}
							<Link href="#" className="underline hover:text-blue-400">
								money-back guarantee
							</Link>{' '}
							for the latest status of our money-back guarantee.
						</p>
					</div>

					<p className="text-sm text-gray-500">
						*For details, please see{' '}
						<Link href="#" className="underline hover:text-blue-400">
							FedEx Rewards Terms and Conditions
						</Link>
						.
					</p>
				</div>
			</div>
		</section>
	);
}
