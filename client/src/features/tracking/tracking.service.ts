import api from '@/lib/axios';
import { Shipment } from './tracking.types';

export async function getShipmentByTrackingNumber(
	trackingNumber: string,
): Promise<Shipment> {
	const response = await api.get(`/tracking/${trackingNumber}`);
	return response.data.shipment;
}
