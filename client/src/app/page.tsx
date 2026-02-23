import BoostYourBusiness from '@/components/BoostYourBusiness';
import { TrackingInput } from '@/components/tracking-input';
import WhyShipWithUs from '@/components/WhyShipWithUs';
import { Calculator, Package, Headphones } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
	const features = [
		{ icon: Calculator, label: 'Get a\nquote' },
		{ icon: Calculator, label: 'Get a\nquote' },
		{ icon: Package, label: 'Ship\nnow' },
		{ icon: Headphones, label: 'Contact\nsupport' },
	];

	return (
		<div className="min-h-screen space-y-28	">
			<div className="relative">
				{/* TEXT SECTION */}
				<div className="px-6 md:px-16 space-y-4 sm:absolute sm:top-0  lg:top-10 lg:left-28 sm:max-w-sm md:max-w-lg z-10">
					<h1 className="text-3xl lg:text-5xl text-gray-800 font-normal sm:font-light leading-tight">
						Keep your automotive supply chain moving
					</h1>
					<p className="text-base text-gray-700 font-light">
						From tires to transmissions, FedEx handles every part. Reach
						customers fast with flexible delivery options and logistics that
						scale with you.
					</p>
					<span className="text-base font-bold text-[#21649b]">
						GEAR UP TO SHIP
					</span>
				</div>

				{/* IMAGE */}
				<div className="mt-6 lg:mt-0">
					<Image
						src="/images/Hero.png"
						alt="HeroImage"
						width={5000}
						height={5000}
						className="w-full h-auto object-cover"
						priority
					/>
				</div>

				{/* GRAY BOX */}
				<div className="px-9 md:px-16 lg:px-40 absolute -bottom-40 sm:-bottom-20 md:-bottom-12 left-0 right-0">
					<div className="bg-[#f5f6f6] rounded-md py-4 px-2 md:px-4 lg:px-12 shadow-md">
						{/* Wrapper */}
						<div className="flex flex-col sm:flex-row gap-10 items-center">
							{/* FEATURES */}
							<div className="w-full">
								<div className="grid grid-cols-4 gap-8 text-center">
									{features.map((feature, index) => (
										<div key={index}>
											<feature.icon className="w-8 h-8 mx-auto mb-2 text-gray-800" />
											<p className="text-gray-800 font-bold text-sm leading-5 whitespace-pre-line">
												{feature.label}
											</p>
										</div>
									))}
								</div>
							</div>

							{/* TRACKING */}
							{/* <div className="w-full">
								<div className="flex flex-row w-full">
									<input
										type="text"
										placeholder="Tracking number"
										className="flex-1 sm:p-2 p1 bg-white border border-gray-300 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
									/>
									<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-4">
										TRACK
									</button>
								</div>
							</div> */}
							<TrackingInput />
						</div>
					</div>
				</div>
			</div>
			<div className="md:mt-20 sm:mt-28 mt-44 border-t-2 border-[#490f80]">
				{' '}
			</div>
			<WhyShipWithUs />
			<BoostYourBusiness />
		</div>
	);
}
