import * as z from 'zod';

export const trackingSchema = z.object({
	trackingNumber: z
		.string()
		.min(12, 'Tracking number must be at least 12 characters'),
});
