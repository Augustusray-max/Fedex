import { create } from 'zustand';

export interface TrackingEvent {
	date: string;
	time: string;
	status: string;
	location: string;
}

export interface TrackingData {
	trackingId: string;
	status: string;
	from: {
		city: string;
		state: string;
		country: string;
		terminal: string;
	};
	to: {
		city: string;
		state: string;
		country: string;
	};
	current: {
		location: string;
		state: string;
		time: string;
		date: string;
	};
	outForDelivery?: {
		location: string;
		state: string;
	};
	events: TrackingEvent[];
	shipmentDetails: {
		trackingNumber: string;
		shipDate: string;
		service: string;
		weight: string;
		handlingUnits: number;
		pieces: number;
		packaging: string;
	};
}

interface TrackingStore {
	view: 0 | 1 | 2;
	trackingId: string;
	trackingData: TrackingData | null;
	setTrackingId: (id: string) => void;
	setView: (view: 0 | 1 | 2) => void;
	setTrackingData: (data: TrackingData) => void;
	reset: () => void;
}

export const useTrackingStore = create<TrackingStore>((set) => ({
	view: 0,
	trackingId: '',
	trackingData: null,
	setTrackingId: (id) => set({ trackingId: id }),
	setView: (view) => set({ view }),
	setTrackingData: (data) => set({ trackingData: data }),
	reset: () => set({ view: 0, trackingId: '', trackingData: null }),
}));

// Mock tracking data generator
export function generateMockTrackingData(trackingId: string): TrackingData {
	return {
		trackingId,
		status: 'On the way',
		from: {
			city: 'Nashville',
			state: 'TN',
			country: 'US',
			terminal: 'Origin Terminal',
		},
		to: {
			city: 'Omaha',
			state: 'NE',
			country: 'US',
		},
		current: {
			location: 'Edwardsville',
			state: 'KS',
			time: '2:20 AM',
			date: '9/27/25',
		},
		outForDelivery: {
			location: 'Omaha',
			state: 'NE',
		},
		events: [
			{
				date: 'Wednesday, 9/24/25',
				time: '3:00 PM',
				status: 'Picked up',
				location: 'Nashville, TN',
			},
			{
				date: 'Thursday, 9/25/25',
				time: '2:12 PM',
				status: 'Picked up',
				location: 'Nashville, TN',
			},
			{
				date: 'Friday, 9/26/25',
				time: '7:53 AM',
				status: 'Left FedEx weight facility',
				location: 'Antioch, TN',
			},
			{
				date: 'Saturday, 9/27/25',
				time: '2:20 AM',
				status: 'On the way',
				location: 'Edwardsville, KS',
			},
		],
		shipmentDetails: {
			trackingNumber: '12345',
			shipDate: '9/25/25',
			service: 'FedEx Freight Economy',
			weight: '910 lbs / 412.77 kgs',
			handlingUnits: 1,
			pieces: 20,
			packaging: 'Other',
		},
	};
}
