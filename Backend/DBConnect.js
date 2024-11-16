import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			serverSelectionTimeoutMS: 20000,
		});
		console.log("Database connected successfully");
	} catch (error) {
		console.error("Error connecting to the database:", error.message);
	}

	mongoose.connection.on("connected", () => {
		console.log("Mongoose connected to the database");
	});

	mongoose.connection.on("error", (err) => {
		console.error("Mongoose connection error:", err.message);
	});

	mongoose.connection.on("disconnected", () => {
		console.log("Mongoose disconnected");
	});
};

export default connectToDB;
