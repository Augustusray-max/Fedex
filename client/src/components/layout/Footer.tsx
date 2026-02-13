import React from 'react';

export function Footer() {
	return (
		<footer className="bg-[#490f80] text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-40">
				{/* Mobile: Stacked layout */}
				<div className="flex flex-col items-center space-y-4 py-6 md:hidden">
					<p className="text-xs font-semibold text-center">© FedEx 1995-2026</p>
					<div className="flex flex-wrap justify-center text-xs space-x-2">
						<span className="hover:underline cursor-pointer">Site Map</span>
						<span className="font-bold">|</span>
						<span className="hover:underline cursor-pointer">
							Cookie Consent
						</span>
						<span className="font-bold">|</span>
						<span className="hover:underline cursor-pointer">Terms of Use</span>
						<span className="font-bold">|</span>
						<span className="hover:underline cursor-pointer">
							Privacy & Security
						</span>
						<span className="font-bold">|</span>
						<span className="hover:underline cursor-pointer">Ad Choices</span>
					</div>
				</div>

				{/* Desktop/Tablet: Side-by-side layout */}
				<div className="hidden md:flex items-center justify-between h-15 space-x-12">
					<p className="text-xs font-semibold">© FedEx 1995-2026</p>
					<div className="flex text-sm space-x-4">
						<p className="hover:underline cursor-pointer">Site Map</p>
						<span className="mx-2 font-bold">|</span>

						<p className="hover:underline cursor-pointer">Cookie Consent</p>
						<span className="mx-2 font-bold">|</span>

						<p className="hover:underline cursor-pointer">Terms of Use</p>
						<span className="mx-2 font-bold">|</span>

						<p className="hover:underline cursor-pointer">Privacy & Security</p>
						<span className="mx-2 font-bold">|</span>

						<p className="hover:underline cursor-pointer">Ad Choices</p>
					</div>
				</div>
			</div>
		</footer>
	);
}
