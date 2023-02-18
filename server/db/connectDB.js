const mongoose = require("mongoose");

const connectDB = async (MONGO_URI) => {
	await mongoose.connect(MONGO_URI);
	console.log("DB Connected");
};

connectDB(process.env.MONGO_URI);
