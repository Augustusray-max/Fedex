'use client';

import { useTrackingStore } from '@/lib/tracking-store';
import { Button } from '@/components/ui/button';
import { Copy, Share2, ChevronDown, Bell, Settings } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import TrackingTimeline from './TrackingTimeline';

export function DeliveryDetails() {
	const { trackingData, setView } = useTrackingStore();
	const [expandManage, setExpandManage] = useState(false);
	const [expandUpdates, setExpandUpdates] = useState(false);

	if (!trackingData) return null;

	const handleCopy = () => {
		navigator.clipboard.writeText(trackingData.trackingNumber);
	};

	return (
		<div className="min-h-screen bg-white px-4 sm:px-8 lg:px-24">
			{/* Header */}
			<div className="border-b-2 border-gray-300 py-4 flex flex-row justify-between items-center ">
				<div className="flex flex-row items-start sm:items-center sm:gap-4">
					<p className="text-lg sm:text-[22px] text-gray-900">
						Tracking ID:{' '}
						<span className="font-light text-base sm:text-xl text-gray-900">
							{trackingData.trackingNumber}
						</span>
					</p>
					<div className="flex sm:gap-2">
						<button
							onClick={handleCopy}
							className="p-2 hover:bg-gray-100 rounded-lg transition"
							title="Copy tracking number"
						>
							<Copy size={18} className="text-gray-600" />
						</button>
						<button
							className="p-2 hover:bg-gray-100 rounded-lg transition"
							title="Share"
						>
							<Share2 size={18} className="text-gray-600" />
						</button>
					</div>
				</div>
				<div className="text-sm text-blue-600 font-medium cursor-pointer hover:text-blue-700">
					Local Scan Time ▼
				</div>
			</div>

			{/* Main Content */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 sm:p-8">
				{/* Left Section */}
				<div className="lg:col-span-2 space-y-6">
					{/* Delivery Details */}
					<div className="border-b border-gray-600 pb-6">
						<h2 className="text-xs sm:text-[12px] font-bold text-gray-700 uppercase mb-4 tracking-wide">
							Delivery Details
						</h2>
						<p className="text-gray-700 mb-4 max-w-xs sm:max-w-md">
							Your package is still on the way and we&apos;re actively working
							to get you a new delivery date.
						</p>
					</div>

					{/* Manage Delivery */}
					<div className="border-b border-gray-600 pb-3">
						<button
							onClick={() => setExpandManage(!expandManage)}
							className="flex items-center justify-between w-full hover:bg-gray-50 px-4 sm:px-8 py-3 rounded transition"
						>
							<div className="flex items-center gap-4 sm:gap-6">
								<Settings size={25} className="text-gray-600" />
								<span className="text-lg sm:text-2xl text-black font-light">
									Manage your delivery
								</span>
							</div>
							<ChevronDown
								size={24}
								className={`text-gray-900 transition-transform ${expandManage ? 'rotate-180' : ''}`}
							/>
						</button>
						{expandManage && (
							<div className="mt-3 pl-4 sm:pl-8 text-gray-600 text-sm">
								<p>Manage delivery options coming soon</p>
							</div>
						)}
					</div>

					{/* Get Updates */}
					<div className="border-b border-gray-600 pb-4">
						<button
							onClick={() => setExpandUpdates(!expandUpdates)}
							className="flex items-center justify-between w-full hover:bg-gray-50 px-4 sm:px-8 py-3 rounded transition"
						>
							<div className="flex items-center gap-4 sm:gap-6">
								<Bell size={25} className="text-gray-600" />
								<span className="text-lg sm:text-2xl text-black font-light">
									Get updates
								</span>
							</div>
							<ChevronDown
								size={24}
								className={`text-gray-800 transition-transform ${expandUpdates ? 'rotate-180' : ''}`}
							/>
						</button>
						{expandUpdates && (
							<div className="mt-3 pl-4 sm:pl-8 text-gray-600 text-sm">
								<p>Get SMS or email updates about your delivery</p>
							</div>
						)}
					</div>
				</div>

				{/* Right Section - Timeline */}
				<div className="lg:col-span-1">
					<TrackingTimeline />
				</div>
			</div>

			{/* CTA Section */}
			<div>
				<div className="h-1 bg-linear-to-r from-purple-600 to-orange-500"></div>
				<div className="px-4 sm:px-6 py-4 text-center space-y-4">
					<h3 className="text-xl sm:text-2xl font-semibold text-gray-700">
						Want to know when your package will arrive?
					</h3>
					<p className="text-gray-600 text-sm sm:text-base">
						Take more control of your delivery with FedEx Delivery Manager.
					</p>
					<Button
						onClick={() => setView(2)}
						className="mt-4 bg-white font-bold hover:ring-2 hover:ring-blue-600 hover:bg-white border-2 border-blue-500 text-blue-500 text-md px-6 py-3 h-auto rounded-4xl"
					>
						SIGN UP FOR FREE
					</Button>
				</div>
				<div className="h-1 bg-linear-to-r from-purple-600 to-orange-500"></div>
			</div>

			{/* Bottom Info Section */}
			<div className="border-t border-gray-300 mt-9 pt-10 space-y-8">
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
						We offer a money-back guarantee for select services. This guarantee
						may be suspended, modified, or revoked. Please check{' '}
						<Link href="#" className="underline hover:text-blue-400">
							money-back guarantee
						</Link>{' '}
						for the latest status of our money-back guarantee.
					</p>
				</div>

				<p className="text-sm text-gray-500 border-b pb-8 border-gray-300">
					*For details, please see{' '}
					<Link href="#" className="underline hover:text-blue-400">
						FedEx Rewards Terms and Conditions
					</Link>
					.
				</p>
			</div>
		</div>
	);
}
