const mongoose = require("mongoose");

const BlogsSchema = new mongoose.Schema({
	date: {
		type: String,
		required: true,
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
});

const BlogsModel = mongoose.model("Blogs", BlogsSchema);

module.exports = BlogsModel;
