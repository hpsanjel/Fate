import React, { useState } from "react";
import { toast } from "react-toastify";

export const BlogPosts = () => {
	const [blog, setBlog] = useState({});
	const [picture, setPicture] = useState(null); // State for storing the uploaded picture

	const handleBlog = (e) => {
		setBlog({ ...blog, [e.target.name]: e.target.value });
	};

	const handlePictureUpload = (e) => {
		setPicture(e.target.files[0]); // Store the uploaded picture
	};

	const handleSubmitBlog = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		formData.append("picture", picture); // Add picture to FormData
		for (const key in blog) {
			formData.append(key, blog[key]); // Add other blog fields to FormData
		}

		try {
			const response = await fetch(`${process.env.VITE_APP_API_URL}/addBlogs`, {
				method: "POST",
				body: formData, // Send FormData
			});
			if (response.ok) {
				toast.success("Blog post has been added successfully", {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 2000,
				});
			} else {
				toast.error("Failed to add blog post", {
					position: toast.POSITION.TOP_RIGHT,
					autoClose: 2000,
				});
			}
		} catch (error) {
			console.error("Error:", error);
			toast.error("An error occurred while adding the blog post", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 2000,
			});
		}
	};

	return (
		<div className="my-12">
			<h2 className="text-2xl font-semibold text-center">Add Blog Post</h2>
			<form onSubmit={handleSubmitBlog} method="POST" className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6" encType="multipart/form-data">
				<div className="flex flex-col">
					<label htmlFor="date" className="text-sm font-medium text-gray-700 mb-2">
						Date
					</label>
					<input name="date" id="date" value={blog.date || ""} onChange={handleBlog} type="date" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fatePrimary" />
				</div>

				<div className="flex flex-col">
					<label htmlFor="author" className="text-sm font-medium text-gray-700 mb-2">
						Author
					</label>
					<input name="author" id="author" value={blog.author || ""} onChange={handleBlog} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fatePrimary" placeholder="Enter author's name" />
				</div>

				<div className="flex flex-col">
					<label htmlFor="title" className="text-sm font-medium text-gray-700 mb-2">
						Title
					</label>
					<input name="title" id="title" value={blog.title || ""} onChange={handleBlog} type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fatePrimary" placeholder="Enter blog title" />
				</div>

				<div className="flex flex-col">
					<label htmlFor="blogpost" className="text-sm font-medium text-gray-700 mb-2">
						Blog Post
					</label>
					<textarea rows="10" name="blogpost" id="blogpost" value={blog.blogpost || ""} onChange={handleBlog} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fatePrimary" placeholder="Write your blog post here" />
				</div>

				<div className="flex flex-col">
					<label htmlFor="picture" className="text-sm font-medium text-gray-700 mb-2">
						Picture
					</label>
					<input type="file" id="picture" name="picture" onChange={handlePictureUpload} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-fatePrimary" />
				</div>

				<button type="submit" className="w-full bg-fatePrimary text-white px-6 py-3 rounded-lg font-medium hover:bg-fatePrimary/90 focus:ring-2 focus:ring-offset-2 focus:ring-fatePrimary">
					Save Blog
				</button>
			</form>
		</div>
	);
};
