'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { trackingSchema } from '@/features/tracking/tracking.schema';

export function TrackingInput() {
	const [trackingNumber, setTrackingNumber] = useState('');
	const router = useRouter();

	const handleTrack = () => {
		const validation = trackingSchema.safeParse({ trackingNumber });

		if (!validation.success) {
			alert(validation.error.issues[0]?.message ?? 'Invalid tracking number');
			return;
		}

		router.push(`/tracking/${trackingNumber.trim()}`);
		setTrackingNumber('');
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter') handleTrack();
	};

	return (
		<div className="w-full">
			<div className="flex flex-row w-full">
				<input
					type="text"
					value={trackingNumber}
					onChange={(e) => setTrackingNumber(e.target.value)}
					onKeyDown={handleKeyPress}
					placeholder="Tracking number"
					className="flex-1 sm:p-2 p-1 bg-white border border-gray-300 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
				/>
				<button
					onClick={handleTrack}
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-4"
				>
					TRACK
				</button>
			</div>
		</div>
	);
}
