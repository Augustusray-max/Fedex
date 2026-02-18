'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import {
	useTrackingStore,
	generateMockTrackingData,
} from '@/lib/tracking-store';

import { DeliveryDetails } from '@/components/delivery-details';

export default function TrackingPage() {
	const { trackingId } = useParams();
	const router = useRouter();
	const { trackingData, setTrackingData, setTrackingId } = useTrackingStore();

	// Ensure we have a string for the tracking ID
	const validTrackingId = Array.isArray(trackingId)
		? trackingId[0]
		: trackingId;

	useEffect(() => {
		if (!validTrackingId) {
			router.push('/');
			return;
		}

		// Generate mock data for this tracking ID
		const data = generateMockTrackingData(validTrackingId);
		setTrackingId(validTrackingId);
		setTrackingData(data);
	}, [validTrackingId, router, setTrackingData, setTrackingId]);

	if (!trackingData) {
		return <div className="mt-20 text-center">Loading...</div>;
	}

	return (
		<div className=" mx-auto space-y-6">
			{/* Delivery Details */}
			<DeliveryDetails />
		</div>
	);
}
