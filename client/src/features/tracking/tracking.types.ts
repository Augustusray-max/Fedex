export interface Address {
	city: string;
	state: string;
	country: string;
	terminal?: string;
}

export interface Location {
	city: string;
	state: string;
	country: string;
	date: string;
	terminal?: string;
}

export interface Shipment {
	trackingId: string;
	_id: string;
	trackingNumber: string;
	recipientName: string;
	origin: Address;
	destination: Address;
	status: string;
	locations: Location[];
	lastUpdate: string;
	__v: number;

	// For frontend convenience: current location
	current?: Location;
}
