import React, { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";
import blogPostData from "./BlogPostData";
import BlogArchive from "./BlogArchive"; // Assuming your component is in BlogArchive.js

const BlogPost = () => {
	const initialState = localStorage.getItem("selectedCategory") || "All";

	const [selectedCategory, setSelectedCategory] = useState(initialState);
	const filteredBlogPosts = selectedCategory === "All" ? blogPostData : blogPostData.filter((blog) => blog.category === selectedCategory);
	useEffect(() => {
		localStorage.setItem("selectedCategory", selectedCategory);
	}, [selectedCategory]);
	return (
		<>
			<section className="bg-white mt-11 mb-8 pb-10 pt-10 md:ml-11 lg:pb-20">
				<div className="container">
					<div className="mb-4 place-items-center">
						{/* <h1 className="text-xl bg-teal-900 text-white px-0 py-1 text-center mb-6">Get more insights from the Blogs</h1> */}
						<button className={`bg-${selectedCategory === "All" ? "teal-900" : "white"} ${selectedCategory === "All" ? "text-white" : "text-black"} px-3 py-2 mr-2 w-fit cursor`} onClick={() => setSelectedCategory("All")}>
							All
						</button>
						<button className={`bg-${selectedCategory === "Popular" ? "teal-900" : "white"} ${selectedCategory === "Popular" ? "text-white" : "text-black"} px-3 py-2 mr-2 w-fit cursor`} onClick={() => setSelectedCategory("Popular")}>
							Popular
						</button>
						<button className={`bg-${selectedCategory === "Recent" ? "teal-900" : "white"} ${selectedCategory === "Recent" ? "text-white" : "text-black"} px-3 py-2 mr-2 w-fit cursor`} onClick={() => setSelectedCategory("Recent")}>
							Recent
						</button>
					</div>
					<p className="mb-8 text-sm">
						Showing {filteredBlogPosts.length} '{selectedCategory}' blog posts out of {blogPostData.length}
					</p>
					<div className="flex flex-wrap">
						{filteredBlogPosts.map((blog, key) => {
							return <BlogCard key={key} date={blog.date} CardTitle={blog.cardTitle} CardDescription={blog.cardDescription} image={blog.image} author={blog.author} alt={blog.alt} category={blog.category} />;
						})}
					</div>

					<div className="text-md bg-slate-100 p-4">
						<BlogArchive />
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPost;
