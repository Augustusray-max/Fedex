const Shipment = require('../model/shipment');

const createMockShipment = async (req, res) => {
	try {
		// Generate tracking number
		const trackingNumber = Math.floor(
			100000000000 + Math.random() * 900000000000,
		).toString();

		const shipment = await Shipment.create({
			trackingNumber,
			recipientName: 'John Doe',
			origin: {
				city: 'Berlin',
				state: '',
				country: 'Germany',
				terminal: 'Berlin Local Facility',
			},
			destination: {
				city: 'Chicago',
				state: 'IL',
				country: 'US',
				terminal: 'Chicago Delivery Center',
			},
			status: 'Pending',
			locations: [
				{
					city: 'Berlin',
					state: '',
					country: 'Germany',
					date: new Date(),
					terminal: 'Berlin Local Facility',
				},
			],
			lastUpdate: new Date(),
		});

		// Realistic route: Berlin → Frankfurt → Memphis → Chicago → Delivered
		const route = [
			{
				city: 'Frankfurt',
				state: '',
				country: 'Germany',
				terminal: 'Frankfurt International Air Hub',
				status: 'In Transit',
			},
			{
				city: 'Memphis',
				state: 'TN',
				country: 'US',
				terminal: 'Memphis Super Hub',
				status: 'Customs Clearance',
			},
			{
				city: 'Chicago',
				state: 'IL',
				country: 'US',
				terminal: 'Chicago Distribution Hub',
				status: 'In Transit',
			},
			{
				city: 'Chicago',
				state: 'IL',
				country: 'US',
				terminal: 'Chicago Delivery Center',
				status: 'Out For Delivery',
			},
			{
				city: 'Chicago',
				state: 'IL',
				country: 'US',
				terminal: 'Chicago Delivery Center',
				status: 'Delivered',
			},
		];

		// Simulate shipment moving along the route every seconds
		let i = 0;
		const interval = setInterval(async () => {
			try {
				if (i < route.length) {
					const currentRoute = route[i];

					// Add new location
					shipment.locations.push({
						city: currentRoute.city,
						state: currentRoute.state,
						country: currentRoute.country,
						date: new Date(),
						terminal: currentRoute.terminal,
					});

					// Use the status from the route array instead of hardcoded logic
					shipment.status = currentRoute.status;
					shipment.lastUpdate = new Date();

					await shipment.save();

					console.log(
						`✅ Location Updated: ${currentRoute.city}, ${currentRoute.state || 'N/A'} | Status: ${shipment.status}`,
					);
					i++;
				} else {
					console.log('🎯 Shipment journey completed!');
					clearInterval(interval);
				}
			} catch (updateError) {
				console.error('❌ Error updating shipment:', updateError);
				clearInterval(interval);
			}
		}, 15000);

		// Return shipment including a "current" field for frontend convenience
		const current = shipment.locations[shipment.locations.length - 1];
		res.status(201).json({
			message: 'Mock shipment created and moving through locations!',
			shipment: {
				...shipment.toObject(),
				current, // adds the current checkpoint for frontend
			},
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ error: 'Failed to create shipment' });
	}
};

const getShipmentByTrackingId = async (req, res) => {
	try {
		const { trackingNumber } = req.params;

		if (!trackingNumber) {
			return res.status(400).json({ message: 'Tracking number is required' });
		}

		const shipment = await Shipment.findOne({ trackingNumber });

		if (!shipment) {
			return res.status(404).json({ message: 'Shipment not found' });
		}

		res.status(200).json({ shipment });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Server error' });
	}
};

module.exports = { createMockShipment, getShipmentByTrackingId };
