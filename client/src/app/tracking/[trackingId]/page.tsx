'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useTrackingStore } from '@/lib/tracking-store';
import { getShipmentByTrackingNumber } from '@/features/tracking/tracking.service';
import { DeliveryDetails } from '@/components/delivery-details';

export default function TrackingPage() {
	const { trackingId } = useParams();
	const router = useRouter();

	const {
		trackingData,
		setTrackingData,
		setTrackingId,
		setLoading,
		setError,
		loading,
		error,
	} = useTrackingStore();

	const validTrackingId = Array.isArray(trackingId)
		? trackingId[0].trim()
		: trackingId?.trim();

	useEffect(() => {
		async function fetchShipment() {
			if (!validTrackingId) {
				router.push('/');
				return;
			}

			try {
				setLoading(true);
				setError(null);

				const data = await getShipmentByTrackingNumber(validTrackingId);

				if (!data) {
					setTrackingData(null);
					setError('Shipment not found');
					return;
				}

				// Derive current from the last location
				const lastLocation = data.locations[data.locations.length - 1];

				const shipmentWithCurrent = {
					...data,
					current: lastLocation
						? {
								city: lastLocation.city,
								state: lastLocation.state,
								country: lastLocation.country,
								terminal: lastLocation.terminal,
								date: new Date(lastLocation.date).toLocaleDateString(),
								time: new Date(lastLocation.date).toLocaleTimeString(),
							}
						: undefined,
				};

				setTrackingId(validTrackingId);
				setTrackingData(shipmentWithCurrent);
			} catch (err) {
				console.error('Error fetching shipment:', err);
				setTrackingData(null);
				setError('Shipment not found');
			} finally {
				setLoading(false);
			}
		}

		fetchShipment();
	}, [
		validTrackingId,
		router,
		setTrackingData,
		setTrackingId,
		setLoading,
		setError,
	]);

	if (loading) {
		return <div className="mt-20 text-center">Loading...</div>;
	}

	if (error) {
		return <div className="mt-20 text-center text-red-500">{error}</div>;
	}

	if (!trackingData) return null;

	return (
		<div className="mx-auto space-y-6">
			<DeliveryDetails />
		</div>
	);
}
