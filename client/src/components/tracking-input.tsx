'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export function TrackingInput() {
	const [input, setInput] = useState('');
	const router = useRouter();

	const handleSearch = () => {
		if (!input.trim()) return alert('Enter tracking number');

		router.push(`/tracking/${input.trim()}`);
		setInput('');
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') handleSearch();
	};

	return (
		<div className="w-full">
			<div className="flex flex-row w-full">
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					onKeyPress={handleKeyPress}
					placeholder="Tracking number"
					className="flex-1 sm:p-2 p-1 bg-white border border-gray-300 text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
				/>
				<button
					onClick={handleSearch}
					className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-4"
				>
					TRACK
				</button>
			</div>
		</div>
	);
}
