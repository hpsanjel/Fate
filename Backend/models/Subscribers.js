const mongoose = require("mongoose");

const SubscriberSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
	},
});

const SubscriberModel = mongoose.model("subscribers", SubscriberSchema);

module.exports = SubscriberModel;
