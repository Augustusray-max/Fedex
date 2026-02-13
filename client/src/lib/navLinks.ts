export const navLinks = [
	{ label: 'Home', href: '/' },

	{
		label: 'Shipping',
		children: [
			{ label: 'Express Shipping', href: '/shipping/express' },
			{ label: 'International Shipping', href: '/shipping/international' },
			{ label: 'Freight Shipping', href: '/shipping/freight' },
		],
	},

	{
		label: 'Services',
		children: [
			{ label: 'Warehousing', href: '/services/warehousing' },
			{ label: 'Custom Clearance', href: '/services/customs' },
		],
	},

	{
		label: 'About',
		children: [
			{ label: 'Our Company', href: '/about/company' },
			{ label: 'Careers', href: '/about/careers' },
		],
	},

	{ label: 'Track', href: '/track' },
	{ label: 'Contact', href: '/contact' },
];
