const express = require('express');
const router = express.Router();
const {
	createMockShipment,
	getShipmentByTrackingId,
} = require('../controller/shipmentController');

router.post('/create-shipment', createMockShipment);
router.get('/tracking/:trackingNumber', getShipmentByTrackingId);

module.exports = router;
