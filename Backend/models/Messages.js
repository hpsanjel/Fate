const mongoose = require("mongoose");

const MessagesSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	email: {
		type: String,
		required: true,
	},

	subject: {
		type: String,
		required: true,
	},

	message: {
		type: String,
		required: true,
	},
});

const MessagesModel = mongoose.model("messages", MessagesSchema);

module.exports = MessagesModel;
