import { Schema, model } from "mongoose";

const MessagesSchema = new Schema({
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

const MessagesModel = model("messages", MessagesSchema);

export default MessagesModel;
