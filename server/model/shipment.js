const mongoose = require('mongoose');

const LocationSchema = new mongoose.Schema({
	city: { type: String, required: true },
	state: { type: String },
	country: { type: String, required: true },
	date: { type: Date, required: true },
	terminal: { type: String },
});

const AddressSchema = new mongoose.Schema({
	city: { type: String, required: true },
	state: { type: String },
	country: { type: String, required: true },
	terminal: { type: String },
});

const ShipmentSchema = new mongoose.Schema({
	trackingNumber: { type: String, required: true, unique: true },
	recipientName: { type: String, required: true },
	origin: { type: AddressSchema, required: true },
	destination: { type: AddressSchema, required: true },
	status: { type: String, default: 'Pending' },
	locations: [LocationSchema],
	lastUpdate: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Shipment', ShipmentSchema);
