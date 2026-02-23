const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//routes
const shipmentRoutes = require('./route/shipmentRoutes');
app.use('/api/v1/shipments', shipmentRoutes);

//database
const connectDB = require('./config/db');

const port = process.env.PORT || 5000;
const start = async () => {
	try {
		await connectDB(process.env.MONGO_URI);
		app.listen(port, () => console.log(`Server is listening port ${port}...`));
	} catch (error) {
		console.log(error);
	}
};
start();
