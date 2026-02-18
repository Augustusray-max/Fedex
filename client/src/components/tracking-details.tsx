'use client';

import { useTrackingStore } from '@/lib/tracking-store';
import { Bell, ChevronLeft, Info, Package, Truck } from 'lucide-react';

export function TrackingDetails() {
	const { trackingData, setView } = useTrackingStore();

	if (!trackingData) return null;

	return (
		<div className="min-h-screen bg-gray-50">
			{/* Header */}
			<div className="bg-white border-b-2 border-gray-300 sticky top-0 z-10">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
					<button
						onClick={() => setView(1)}
						className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition w-full sm:w-auto"
					>
						<ChevronLeft size={22} />
						<p className="text-lg sm:text-[22px] text-gray-900 truncate">
							Tracking ID:{' '}
							<span className="font-light text-base sm:text-xl text-gray-900">
								{trackingData.trackingId}
							</span>
						</p>
					</button>
				</div>
			</div>

			<div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-8">
				{/* Travel History */}
				<div>
					<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 gap-3 sm:gap-0">
						<h2 className="text-2xl sm:text-3xl text-gray-900">
							Travel history
						</h2>
					</div>

					{/* Info Banner */}
					<div className="bg-blue-50 border-l-4 border-blue-400 p-4 sm:p-6 mb-6 sm:mb-9 rounded-r">
						<div className="flex flex-col sm:flex-row gap-3 sm:gap-3">
							<Info size={20} className="text-blue-400 shrink-0 mt-1 sm:mt-0" />
							<div>
								<p className="text-blue-900 text-sm sm:text-base">
									You&apos;re viewing what our customer care team would share
									with you. Sign up for future updates and we&apos;ll let you
									know if anything changes.
								</p>
								<button className="text-blue-500 font-medium text-sm sm:text-base mt-2 hover:underline flex items-center gap-1">
									<Bell size={18} />
									<p>Get updates</p>
								</button>
							</div>
						</div>
					</div>

					{/* Travel History Table */}
					<div className="bg-white rounded-lg overflow-x-auto border border-gray-200">
						<table className="w-full min-w-150 sm:min-w-full table-auto">
							<tbody className="divide-y divide-gray-200">
								{trackingData.events.map((event, idx) => (
									<tr key={idx} className="hover:bg-gray-50 transition">
										<td className="px-3 sm:px-6 py-2 text-xs sm:text-sm text-gray-950">
											{event.date}
										</td>
										<td className="px-3 sm:px-6 py-2 text-xs sm:text-sm text-gray-950">
											{event.time}
										</td>
										<td className="px-3 sm:px-6 py-2 text-xs sm:text-sm text-gray-900 font-medium">
											{event.status}
										</td>
										<td className="px-3 sm:px-6 py-2 text-xs sm:text-sm text-gray-600">
											{event.location}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>

				{/* Shipment Facts */}
				<div className="space-y-6">
					<h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-2">
						Shipment facts
					</h2>

					{/* Shipment Overview */}
					<div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
						<div className="flex flex-row items-start gap-4 mb-4">
							<Package
								size={35}
								className="text-purple-600 shrink-0 mt-1 sm:mt-0"
							/>
							<div className="flex-1">
								<h3 className="text-lg sm:text-xl text-gray-900 mb-4">
									Shipment overview
								</h3>
								<div className="flex flex-col max-w-full space-y-6">
									<div className="flex justify-between w-full">
										<p className="text-xs sm:text-sm font-bold text-gray-600 uppercase">
											Tracking Number
										</p>
										<p className="text-sm text-gray-900">
											{trackingData.shipmentDetails.trackingNumber}
										</p>
									</div>
									<div className="flex justify-between w-full sm:w-auto">
										<p className="text-xs sm:text-sm font-bold text-gray-600 uppercase">
											Ship Date
										</p>
										<p className="text-sm text-gray-900">
											{trackingData.shipmentDetails.shipDate}
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Services */}
					<div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
						<div className="flex flex-row items-start gap-4 mb-4">
							<Truck
								size={35}
								className="text-purple-600 shrink-0 mt-1 sm:mt-0"
							/>
							<div className="flex-1">
								<h3 className="text-lg sm:text-xl text-gray-900 mb-4">
									Services
								</h3>
								<div className="flex flex-row items-start sm:items-center justify-between max-w-md ">
									<p className="text-xs sm:text-sm font-bold text-gray-600 uppercase">
										Service
									</p>
									<p className="text-sm text-gray-900 bg-gray-50  py-1 sm:py-2 rounded">
										{trackingData.shipmentDetails.service}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Package Details */}
					<div className="bg-white rounded-lg p-4 sm:p-6 border border-gray-200">
						<div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
							<Package
								size={35}
								className="text-purple-600 shrink-0 mt-1 sm:mt-0"
							/>
							<div className="flex-1">
								<h3 className="text-lg sm:text-xl text-gray-900 mb-4">
									Package details
								</h3>

								<div className="flex flex-col gap-2 sm:gap-4">
									{[
										['Weight', trackingData.shipmentDetails.weight],
										[
											'Total Handling Units',
											trackingData.shipmentDetails.handlingUnits,
										],
										[
											'Handling Unit Pieces',
											trackingData.shipmentDetails.pieces,
										],
										['Total Pieces', trackingData.shipmentDetails.pieces],
										[
											'Total Shipment Weight',
											trackingData.shipmentDetails.weight,
										],
										['Packaging', trackingData.shipmentDetails.packaging],
									].map(([label, value], i) => (
										<div
											key={i}
											className="flex flex-col sm:flex-row sm:justify-between py-2 border-b last:border-b-0 border-gray-100 max-w-md"
										>
											<p className="text-xs sm:text-sm font-bold text-gray-600 uppercase mb-1 sm:mb-0">
												{label}
											</p>
											<p className="text-sm sm:text-base text-gray-700 font-normal wrap-break-word">
												{value}
											</p>
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
