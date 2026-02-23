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

export default function TrackingTimeline() {
	const router = useRouter();
	const { trackingData } = useTrackingStore();
	if (!trackingData) return null;

	// Create dynamic steps based on tracking data
	const steps: Step[] = [
		{
			title: 'Origin Terminal',
			location: `${trackingData.origin?.city}, ${trackingData.origin?.state} US`,
		},
		{ title: 'We Have Your Package' },
		{
			title: 'On The Way',
			location: trackingData.current
				? `${trackingData.current.city}, ${trackingData.current.state}`
				: trackingData.locations.length > 0
					? `${trackingData.locations[trackingData.locations.length - 1].city}, ${trackingData.locations[trackingData.locations.length - 1].state}`
					: 'In Transit',
			date: trackingData.current
				? `${trackingData.current.date} ${trackingData.current.time}`
				: trackingData.locations.length > 0
					? `${new Date(trackingData.locations[trackingData.locations.length - 1].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' }).replace(/\//g, '/')} ${new Date(trackingData.locations[trackingData.locations.length - 1].date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`
					: '',
		},
		{ title: 'Out For Delivery' },
		{
			title: 'Delivered',
			location: `${trackingData.destination?.city}, ${trackingData.destination?.state} US`,
		},
	];

	// Calculate active index based on shipment progress
	const activeIndex =
		trackingData.status === 'Delivered'
			? 4
			: trackingData.status === 'Out For Delivery'
				? 3
				: trackingData.locations.length > 1
					? 2 // Multiple locations = On The Way
					: trackingData.locations.length === 1
						? 1 // One location = We Have Your Package
						: 0; // No locations = Origin

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
							{trackingData.origin?.city}, {trackingData.origin?.state} US
						</p>
					</div>
					<div>
						<p className="text-xs text-gray-500 italic">
							{trackingData.origin?.terminal}
						</p>
						<p className="text-xs text-blue-600 font-medium mt-1 uppercase">
							{trackingData.origin?.city}, {trackingData.origin?.state}
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
						{trackingData.current
							? `${trackingData.current.city}, ${trackingData.current.state}`
							: trackingData.locations.length > 0
								? `${trackingData.locations[trackingData.locations.length - 1].city}, ${trackingData.locations[trackingData.locations.length - 1].state}`
								: 'In Transit'}
					</p>
					<p className="text-xs text-gray-600">
						{trackingData.current
							? `${trackingData.current.date} ${trackingData.current.time}`
							: trackingData.locations.length > 0
								? `${new Date(trackingData.locations[trackingData.locations.length - 1].date).toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: '2-digit' }).replace(/\//g, '/')} ${new Date(trackingData.locations[trackingData.locations.length - 1].date).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`
								: ''}
					</p>
					<button
						className="text-sm text-gray-600 underline font-medium hover:text-blue-400 mt-2"
						onClick={() =>
							router.push(`/tracking/${trackingData.trackingNumber}/details`)
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
						{trackingData.destination?.city}, {trackingData.destination?.state}{' '}
						US
					</p>
				</div>
			</div>
		</div>
	);
}
