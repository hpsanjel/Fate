import { Schema, model } from "mongoose";

const PromptSchema = new Schema({
	prompt: {
		type: String,
		required: true,
	},
});

const PromptModel = model("prompts", PromptSchema);

export default PromptModel;
