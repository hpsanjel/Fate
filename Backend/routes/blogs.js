import express from "express";
import BlogsModel from "../models/Blogs.js";

const router = express.Router();

router.get("/blogs", async (req, res) => {
	try {
		const blogs = await BlogsModel.find({});
		res.json(blogs);
	} catch (error) {
		console.error("Error fetching blogs:", error);
		res.status(500).json({ error: "Failed to fetch blogs" });
	}
});

export default router;
