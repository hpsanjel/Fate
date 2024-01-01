const mongoose = require("mongoose");

const DBConnect = async () => {
	try {
		const URL = process.env.MONGODB_URL;
		await mongoose.connect(URL);
		console.log("DB connected.");
	} catch (error) {
		console.log("Oops Error:", error.message);
		process.exit(1);
	}
};
DBConnect();
