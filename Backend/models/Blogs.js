import { Schema, model } from "mongoose";

const BlogsSchema = new Schema({
	date: {
		type: String,
		required: false,
	},

	author: {
		type: String,
		required: true,
	},

	title: {
		type: String,
		required: true,
	},

	blogpost: {
		type: String,
		required: true,
	},
	picture: {
		type: String,
		required: false,
	},
});

const BlogsModel = model("Blogs", BlogsSchema);

export default BlogsModel;
