'use client';
import { useTrackingStore } from '@/lib/tracking-store';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Step = {
	title: string;
	location?: string;
	date?: string;
};

const steps: Step[] = [
	{ title: 'Origin Terminal', location: 'Nashville, TN US' },
	{ title: 'We Have Your Package' },
	{
		title: 'On The Way',
		location: 'Edwardsville, KS',
		date: '9/27/25 2:20 AM',
	},
	{ title: 'Out For Delivery' },
	{ title: 'Delivered', location: 'Omaha, NE US' },
];

export default function TrackingTimeline() {
	const router = useRouter();
	const { trackingData } = useTrackingStore();
	if (!trackingData) return null;

	const activeIndex = 2;

	return (
		<div className="flex gap-4 -mb-20 w-full max-w-3xl mx-auto p-6">
			{/* LEFT SIDE (LINE + ICONS) */}
			<div className="relative flex flex-col items-center">
				{/* Background Line */}
				<div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-102.5 bg-gray-200 rounded-full" />

				{/* Active Progress Line (ROLL DOWN EFFECT) */}
				<motion.div
					className="absolute top-0 left-1/2 -translate-x-1/2 w-4 bg-[#4e0c8b] rounded-full"
					style={{
						height: `${activeIndex * 96 + 30}px`,
						originY: 0,
					}}
					initial={{ scaleY: 0 }}
					animate={{ scaleY: 1 }}
					transition={{
						duration: 1.1,
						ease: [0.22, 1, 0.36, 1],
					}}
				/>

				{steps.map((step, index) => {
					const isActive = index === activeIndex;
					const isCompleted = index < activeIndex;

					return (
						<div
							key={index}
							className="relative z-10 flex items-center justify-center mb-16"
						>
							{isActive ? (
								<motion.div
									initial={{ scale: 0, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{
										delay: 1,
										type: 'spring',
										stiffness: 200,
										damping: 15,
									}}
									className="w-15 h-15 bg-[#4e0c8b] rounded-full flex items-center justify-center shadow-xl"
								>
									<div className="border-3 border-white p-1 rounded-full">
										<ArrowRight className="text-white" size={22} />
									</div>
								</motion.div>
							) : (
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: index * 0.15 }}
									className={`w-1.5 h-1.5 rounded-full mt-4 ${
										isCompleted ? 'bg-gray-100' : 'bg-gray-400'
									}`}
								/>
							)}
						</div>
					);
				})}
			</div>

			{/* RIGHT SIDE (TEXT CONTENT) */}
			<div className="space-y-8">
				<div className="space-y-3">
					<div>
						<p className="text-xs font-bold text-gray-700 uppercase">FROM</p>
						<p className="text-gray-900">
							{trackingData.from.city}, {trackingData.from.state} US
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-500 italic">
							{trackingData.from.terminal}
						</p>
						<p className="text-xs text-blue-600 font-medium mt-1 uppercase">
							{trackingData.from.city}, {trackingData.from.state}
						</p>
					</div>
				</div>

				<div>
					<p className="text-xs font-bold text-gray-600 uppercase">
						WE HAVE YOUR PACKAGE
					</p>
				</div>

				<div>
					<p className="text-xs font-bold text-gray-600 uppercase">
						ON THE WAY
					</p>
					<p className="font-semibold text-gray-900">
						{trackingData.current.location}, {trackingData.current.state}
					</p>
					<p className="text-xs text-gray-600">
						{trackingData.current.date} {trackingData.current.time}
					</p>
					<button
						className="text-sm text-gray-600 underline font-medium hover:text-blue-400 mt-2"
						onClick={() =>
							router.push(`/tracking/${trackingData.trackingId}/details`)
						}
					>
						View more details
					</button>
				</div>

				<div>
					<p className="text-xs font-bold text-gray-600 uppercase">
						OUT FOR DELIVERY
					</p>
				</div>

				<div>
					<p className="text-xs font-bold text-gray-600 uppercase">TO</p>
					<p className="text-gray-600">
						{trackingData.to.city}, {trackingData.to.state} US
					</p>
				</div>
			</div>
		</div>
	);
}
