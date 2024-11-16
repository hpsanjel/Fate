import { Schema, model } from "mongoose";

const SubscriberSchema = new Schema(
	{
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			lowercase: true,
		},
	},
	{
		timestamps: true,
	}
);

const SubscriberModel = model("subscribers", SubscriberSchema);

export default SubscriberModel;
