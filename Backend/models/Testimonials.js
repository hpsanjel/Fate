const mongoose = require("mongoose");

const TestimonialsSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},

	testimony: {
		type: String,
		required: true,
	},

	date: {
		type: Date,
		required: true,
	},
});

const TestimonialsModel = mongoose.model("Testimonials", TestimonialsSchema);

module.exports = TestimonialsModel;
