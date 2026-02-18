'use client';

import { useRouter } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import {
	ChevronDown,
	Search,
	UserCircle,
	Menu,
	X,
	ArrowRight,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Header() {
	const [input, setInput] = useState('');
	const router = useRouter();
	const wrapperRef = useRef<HTMLDivElement>(null);

	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openDropdown, setOpenDropdown] = useState<string | null>(null);

	const toggleDropdown = (name: string) => {
		setOpenDropdown((prev) => (prev === name ? null : name));
	};

	const handleSearch = () => {
		if (!input.trim()) return alert('Enter tracking number');

		router.push(`/tracking/${input.trim()}`);
		setInput('');
	};

	const handleKeyPress = (e: React.KeyboardEvent) => {
		if (e.key === 'Enter') handleSearch();
	};

	// Close dropdowns and mobile menu on outside click
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				wrapperRef.current &&
				!wrapperRef.current.contains(event.target as Node)
			) {
				setOpenDropdown(null);
				setMobileMenuOpen(false);
			}
		};
		document.addEventListener('mousedown', handleClickOutside);
		return () => document.removeEventListener('mousedown', handleClickOutside);
	}, []);

	return (
		<header
			ref={wrapperRef}
			className="sticky top-0 left-0 right-0 z-50 bg-[#490f80] text-white"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-10 lg:px-36">
				<div className="flex items-center justify-between h-20">
					{/* Logo */}
					<Link href="/">
						<Image src="/logo.png" alt="Logo" width={87} height={87} />
					</Link>

					{/* Desktop Nav */}
					<nav className="hidden lg:flex items-center gap-8">
						{/* Tracking */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown('tracking')}
								className="flex items-center gap-2 hover:opacity-80"
							>
								Tracking
								<ChevronDown
									className={`w-4 h-4 transition-transform ${
										openDropdown === 'tracking' ? 'rotate-180' : ''
									}`}
								/>
							</button>

							{openDropdown === 'tracking' && (
								<div className="absolute top-full mt-2 w-96 bg-white text-gray-900 rounded-lg shadow-xl p-6">
									<label className="block text-lg font-bold mb-3">
										Tracking Number
									</label>
									<input
										type="text"
										value={input}
										onChange={(e) => setInput(e.target.value)}
										onKeyPress={handleKeyPress}
										placeholder="Tracking Number"
										className="w-full px-4 py-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-orange-500"
									/>
									<button
										onClick={handleSearch}
										className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md flex items-center justify-center gap-2"
									>
										TRACK <ArrowRight className="w-5 h-5" />
									</button>
								</div>
							)}
						</div>

						{/* Support */}
						<div className="relative">
							<button
								onClick={() => toggleDropdown('support')}
								className="flex items-center gap-2 hover:opacity-80"
							>
								Support
								<ChevronDown
									className={`w-4 h-4 transition-transform ${
										openDropdown === 'support' ? 'rotate-180' : ''
									}`}
								/>
							</button>

							{openDropdown === 'support' && (
								<div className="absolute top-full mt-2 w-64 bg-white text-gray-900 rounded-md shadow-xl p-2">
									<a
										href="/support"
										className="block py-2 hover:text-orange-500"
									>
										Customer Support
									</a>
								</div>
							)}
						</div>
					</nav>

					{/* Right Side */}
					<div className="flex items-center gap-3">
						{/* Mobile Toggle */}
						<button
							onClick={() => setMobileMenuOpen((prev) => !prev)}
							className="lg:hidden"
						>
							{mobileMenuOpen ? (
								<X className="w-6 h-6" />
							) : (
								<Menu className="w-6 h-6" />
							)}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{mobileMenuOpen && (
					<div className="lg:hidden bg-white text-gray-900 rounded-md shadow-lg mt-2">
						<div className="py-4 space-y-1">
							{/* Mobile Tracking */}
							<button
								onClick={() => toggleDropdown('m-tracking')}
								className="w-full flex justify-between items-center px-6 py-3 font-medium hover:bg-gray-100 transition"
							>
								Tracking
								<ChevronDown
									className={`w-4 h-4 transition-transform ${
										openDropdown === 'm-tracking' ? 'rotate-180' : ''
									}`}
								/>
							</button>

							{openDropdown === 'm-tracking' && (
								<div className="px-6 pb-6">
									<label className="block text-lg font-bold mb-3">
										Tracking Number
									</label>
									<input
										type="text"
										value={input}
										onChange={(e) => setInput(e.target.value)}
										onKeyPress={handleKeyPress}
										placeholder="Tracking Number"
										className="w-full px-4 py-3 border border-gray-300 rounded-md mb-3 focus:ring-2 focus:ring-orange-500"
									/>
									<button
										onClick={handleSearch}
										className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded-md flex items-center justify-center gap-2 transition"
									>
										TRACK <ArrowRight className="w-5 h-5" />
									</button>
								</div>
							)}

							{/* Mobile Support */}
							<button
								onClick={() => toggleDropdown('m-support')}
								className="w-full flex justify-between items-center px-6 py-3 font-medium hover:bg-gray-100 transition"
							>
								Support
								<ChevronDown
									className={`w-4 h-4 transition-transform ${
										openDropdown === 'm-support' ? 'rotate-180' : ''
									}`}
								/>
							</button>

							{openDropdown === 'm-support' && (
								<div className="px-6 pb-4 space-y-2">
									<a
										href="/support"
										className="block py-2 hover:text-orange-500"
									>
										Customer Support
									</a>
								</div>
							)}
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
