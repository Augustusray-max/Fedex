import Image from 'next/image';
import Link from 'next/link';

export default function Selfservice() {
	const features = [
		{
			title: 'Explore your shipping options',
			description:
				"Whether you need to compare delivery services, calculate shipping rates, or find packing supplies, we've got you. ",
			cta: 'SEE SHIPPING SERVICES',
			image: '/images/supports1.jpg',
		},
		{
			title: 'Get small business support',
			description:
				'We’re all in for small business. Save time with self-service tools, schedule a call with a sales support rep, or chat live.',
			cta: 'OPEN A FREE ACCOUNT',
			image: '/images/supports2.jpg',
		},
		{
			title: 'Pack and ship like a pro',
			description:
				'Visit our online How-to Hub for guidance on everything from international shipping to packaging specialty items. ',
			cta: 'FIND SHIPPING TIPS',
			image: '/images/supports3.jpg',
		},
	];

	return (
		<section className="py-16 px-4 sm:px-6 lg:px-12">
			<div className="max-w-6xl mx-auto">
				{/* Headline */}
				<h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-gray-600 mb-12 text-center">
					More self-service tools and resources
				</h2>

				{/* Features */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{features.map((feature, index) => (
						<div
							key={index}
							className="flex flex-col md:flex-row lg:flex-col items-center gap-6 p-4 rounded-sm shadow-sm"
						>
							{/* Image */}
							<div className="w-full md:w-40 lg:w-full shrink-0">
								<Image
									src={feature.image || '/placeholder.svg'}
									alt={feature.title}
									width={300}
									height={300}
									className="w-full h-auto object-cover"
								/>
							</div>

							{/* Content */}
							<div className="flex-1 text-center md:text-left lg:text-center">
								<h3 className="text-xl sm:text-2xl font-normal text-gray-700 mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-900 font-light mb-3 text-lg sm:text-base leading-relaxed">
									{feature.description}
								</p>
								<Link
									href="#"
									className="text-blue-500 hover:text-blue-600 font-bold text-sm tracking-wide"
								>
									{feature.cta}
								</Link>
							</div>
						</div>
					))}
				</div>

				{/* Bottom Info Section */}
				<div className="border-t border-gray-300 pt-10 mt-10 space-y-8 text-gray-600">
					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-2">
							FedEx rate and surcharge changes
						</h4>
						<p>
							Learn more about{' '}
							<Link href="#" className="underline hover:text-blue-400">
								rate and surcharge changes
							</Link>{' '}
							—last updated 2/2/2026.
						</p>
					</div>

					<div>
						<h4 className="text-lg font-semibold text-gray-900 mb-2">
							FedEx money-back guarantee
						</h4>
						<p>
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
