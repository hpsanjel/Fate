import { Schema, model } from "mongoose";

const CallbackSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			trim: true,
			lowercase: true,
		},
		phone: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
	}
);

const CallbackModel = model("callbacks", CallbackSchema);

export default CallbackModel;
