'use client';

import { useState } from 'react';
import { MessagesSquare, X } from 'lucide-react';

export default function ContactBubble() {
	const [open, setOpen] = useState(false);
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		message: '',
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log('Form submitted:', formData);
		alert('Message sent!'); // Replace with your backend API call
		setFormData({ name: '', email: '', message: '' });
		setOpen(false);
	};

	return (
		<div className="fixed bottom-6 md:bottom-16 right-9  md:right-24 z-50">
			{/* Modal */}
			{open && (
				<div className="fixed inset-0 flex items-center justify-center backdrop-blur-sm">
					<div className="bg-white w-80 md:w-96 rounded-xl shadow-lg p-6 relative">
						<button
							onClick={() => setOpen(false)}
							className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
						>
							<X className="w-5 h-5" />
						</button>

						<h2 className="text-xl font-semibold mb-4">
							Contact Customer Service
						</h2>

						<form onSubmit={handleSubmit} className="flex flex-col gap-3">
							<input
								type="text"
								name="name"
								value={formData.name}
								onChange={handleChange}
								placeholder="Name"
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#490f80]"
								required
							/>
							<input
								type="email"
								name="email"
								value={formData.email}
								onChange={handleChange}
								placeholder="Email"
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#490f80]"
								required
							/>
							<textarea
								name="message"
								value={formData.message}
								onChange={handleChange}
								placeholder="Message"
								rows={4}
								className="border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#490f80]"
								required
							/>
							<button
								type="submit"
								className="bg-[#490f80] text-white rounded-md py-2 hover:bg-[#490f80] transition"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			)}

			{/* Floating Chat Bubble */}
			<button
				onClick={() => setOpen(true)}
				className="w-14 h-14 rounded-full bg-[#490f80] text-white flex items-center justify-center shadow-lg hover:bg-[#490f80] transition"
			>
				<MessagesSquare className="w-6 h-6" />
			</button>
		</div>
	);
}
