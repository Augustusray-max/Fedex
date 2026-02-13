import {
	Mail,
	Facebook,
	Twitter,
	Instagram,
	Linkedin,
	Youtube,
	PinIcon,
} from 'lucide-react';

interface SocialLink {
	name: string;
	icon: React.ReactNode;
	href: string;
	label: string;
}

export default function FollowFedex() {
	const socialLinks: SocialLink[] = [
		{
			name: 'Email',
			icon: <Mail className="w-5 h-5" />,
			href: 'mailto:contact@fedex.com',
			label: 'Email',
		},
		{
			name: 'Facebook',
			icon: <Facebook className="w-5 h-5" />,
			href: 'https://facebook.com/fedex',
			label: 'Facebook',
		},
		{
			name: 'X',
			icon: <Twitter className="w-5 h-5" />,
			href: 'https://twitter.com/fedex',
			label: 'X (Twitter)',
		},
		{
			name: 'Instagram',
			icon: <Instagram className="w-5 h-5" />,
			href: 'https://instagram.com/fedex',
			label: 'Instagram',
		},
		{
			name: 'LinkedIn',
			icon: <Linkedin className="w-5 h-5" />,
			href: 'https://linkedin.com/company/fedex',
			label: 'LinkedIn',
		},
		{
			name: 'YouTube',
			icon: <Youtube className="w-5 h-5" />,
			href: 'https://youtube.com/fedex',
			label: 'YouTube',
		},
		{
			name: 'Pinterest',
			icon: <PinIcon className="w-5 h-5" />,
			href: 'https://pinterest.com/fedex',
			label: 'Pinterest',
		},
	];

	return (
		<div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-8 px-4 sm:px-10 md:px-20 lg:px-40">
			<h2 className="text-sm font-bold text-[#490f80] whitespace-nowrap">
				FOLLOW FEDEX
			</h2>

			<div className="flex flex-wrap items-center gap-4 sm:gap-4">
				{socialLinks.map((social) => (
					<a
						key={social.name}
						href={social.href}
						aria-label={social.label}
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex items-center justify-center w-8 h-8 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors"
					>
						{social.icon}
					</a>
				))}
			</div>
		</div>
	);
}
