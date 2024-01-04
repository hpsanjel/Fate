const mongoose = require("mongoose");

const PromptSchema = new mongoose.Schema({
	prompt: {
		type: String,
		required: true,
	},
});

const PromptModel = mongoose.model("prompts", PromptSchema);

module.exports = PromptModel;
