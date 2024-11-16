import { Schema, model } from "mongoose";

const TestimonialsSchema = new Schema({
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

const TestimonialsModel = model("Testimonials", TestimonialsSchema);

export default TestimonialsModel;
