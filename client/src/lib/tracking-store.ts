import { create } from 'zustand';

export interface Location {
	city: string;
	state: string;
	country: string;
	date: string;
	terminal?: string;
}

export interface Address {
	city: string;
	state: string;
	country: string;
	terminal?: string;
}

export interface Shipment {
	_id: string;
	trackingNumber: string;
	recipientName: string;
	origin: Address;
	destination: Address;
	status: string;
	locations: Location[];
	lastUpdate: string;
	current?: {
		city: string;
		state: string;
		country: string;
		date: string;
		time: string;
		terminal?: string;
	};
}

interface TrackingStore {
	view: 0 | 1 | 2;
	trackingId: string;
	trackingData: Shipment | null;
	loading: boolean;
	error: string | null;

	setTrackingId: (id: string) => void;
	setView: (view: 0 | 1 | 2) => void;
	setTrackingData: (data: Shipment | null) => void;
	setLoading: (value: boolean) => void;
	setError: (message: string | null) => void;
	reset: () => void;
}

export const useTrackingStore = create<TrackingStore>((set) => ({
	view: 0,
	trackingId: '',
	trackingData: null,
	loading: false,
	error: null,

	setTrackingId: (id) => set({ trackingId: id }),
	setView: (view) => set({ view }),
	setTrackingData: (data) => set({ trackingData: data }),
	setLoading: (value) => set({ loading: value }),
	setError: (message) => set({ error: message }),

	reset: () =>
		set({
			view: 0,
			trackingId: '',
			trackingData: null,
			loading: false,
			error: null,
		}),
}));
