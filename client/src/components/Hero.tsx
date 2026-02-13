import React from 'react';

const Hero = () => {
	return (
		<section className="relative w-full">
			{/* Image Wrapper */}
			<div className="relative w-full min-h-[60vh]">
				{/* Responsive Image */}
				<picture>
					{/* Desktop */}
					<source srcSet="/images/care.jpg" media="(min-width: 640px)" />
					{/* Mobile */}
					<img
						src="/images/care-mobile.jpg"
						alt="Customer Support"
						className="absolute inset-0 w-full h-full object-cover"
					/>
				</picture>

				{/* Overlay */}
				<div className="absolute inset-0 bg-[#6852a6]/40" />

				{/* Content */}
				<div className="relative z-10 flex items-center justify-center min-h-[60vh] px-4 text-center">
					<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
						Customer Support
					</h1>
				</div>
			</div>
		</section>
	);
};

export default Hero;
