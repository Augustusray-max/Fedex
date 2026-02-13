import FollowFedex from '@/components/follow-fedex';
import Hero from '@/components/Hero';
import Selfservice from '@/components/SelfService';
import {
	CalendarSearch,
	Clock5,
	LetterTextIcon,
	Package2,
	Tag,
} from 'lucide-react';

const Support = () => {
	return (
		<div className="min-h-screen flex flex-col">
			{/* Hero Section */}
			<Hero />

			{/* Intro Section */}
			<div className="py-6 px-4 sm:px-6 lg:px-12 text-center">
				<h1 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-2">
					Get help with your deliveries
				</h1>
				<p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
					Skip the call to customer service by using these self-serve tools and
					resources
				</p>
			</div>

			{/* Cards Section */}
			<div className="flex flex-col sm:flex-row justify-center gap-6 px-4 sm:px-6 lg:px-56 mb-12">
				{/* Receiving Card */}
				<div className="flex-1 p-6 border bg-gray-100 rounded-lg">
					<h2 className="font-semibold text-gray-700 mb-4">Receiving</h2>
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							<CalendarSearch className="w-5 h-5 text-gray-600" />
							<p className="text-sm text-gray-600">I received a door tap</p>
						</div>
						<div className="flex items-center space-x-3">
							<Clock5 className="w-5 h-5 text-gray-600" />
							<p className="text-sm text-gray-600">Make a return</p>
						</div>
						<div className="flex items-center space-x-3">
							<Tag className="w-5 h-5 text-gray-600" />
							<p className="text-sm text-gray-600">File a claim</p>
						</div>
					</div>
					<div className="border-t mt-4 pt-2 border-gray-300">
						<a
							href="#"
							className="text-blue-500 hover:underline text-sm font-medium"
						>
							SEE ALL TRACKING SERVICES ➡️
						</a>
					</div>
				</div>

				{/* Sending Card */}
				<div className="flex-1 p-6 border bg-gray-100 rounded-lg">
					<h2 className="font-semibold text-gray-700 mb-4">Sending</h2>
					<div className="space-y-3">
						<div className="flex items-center space-x-3">
							<Clock5 className="w-5 h-5 text-gray-600" />
							<p className="text-sm text-gray-600">
								I schedule pickups and drop offs
							</p>
						</div>
						<div className="flex items-center space-x-3">
							<Package2 className="w-5 h-5 text-gray-600" />
							<p className="text-sm text-gray-600">Change delivery address</p>
						</div>
						<div className="flex items-center space-x-3">
							<LetterTextIcon className="w-5 h-5 text-gray-600" />
							<p className="text-sm text-gray-600">Create a shipping label</p>
						</div>
					</div>
					<div className="border-t mt-4 pt-2 border-gray-300">
						<a
							href="#"
							className="text-blue-500 hover:underline text-sm font-medium"
						>
							SEE ALL SHIPPING SERVICES ➡️
						</a>
					</div>
				</div>
			</div>

			{/* Support Ticket Section */}
			<div className="py-6 px-4 sm:px-6 lg:px-12 mb-10 flex flex-col items-center">
				<h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-4 text-center">
					Check up on your support ticket
				</h2>

				<div className="w-full sm:w-2/3 lg:w-1/2">
					<label className="block text-sm font-bold text-gray-700 mb-2">
						Enter your case or tracking number
					</label>
					<div className="flex flex-col sm:flex-row gap-2">
						<input
							type="text"
							placeholder=""
							className="flex-1 p-2 border border-black text-gray-800 placeholder-gray-500 outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
						/>
						<button className="bg-orange-white border-2 border-orange-600 hover:bg-orange-600 text-orange-600 font-bold px-5 py-2">
							CHECK NOW
						</button>
					</div>
				</div>
			</div>

			{/* Selfservice Section */}
			<Selfservice />
			<FollowFedex />
		</div>
	);
};

export default Support;
