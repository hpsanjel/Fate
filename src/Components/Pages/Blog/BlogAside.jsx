import React, { useState, useEffect } from "react";
import SectionHeader from "../../Includes/SectionHeader";
import AsideBlogCard from "./AsideBlogCard";
import blogPostData from "./AsideBlogData";
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
			<section className="bg-white mt-7 rounded-lg p-4 w-full">
				<div className="">
					<div className="mx-8 bg-slate-50 pb-2 mb-6 place-items-center shadow-md p-4">
						{/* <h1 className="text-xl bg-fatePrimary text-white px-0 py-1 text-center mb-6">Get more insights from the Blogs</h1> */}
						<button className={`bg-${selectedCategory === "All" ? "fatePrimary" : "white"} ${selectedCategory === "All" ? "text-white" : "text-black"} px-3 py-2 mr-2 w-fit cursor rounded-lg`} onClick={() => setSelectedCategory("All")}>
							All
						</button>
						<button className={`bg-${selectedCategory === "Popular" ? "fatePrimary" : "white"} ${selectedCategory === "Popular" ? "text-white" : "text-black"} px-3 py-2 mr-2 w-fit cursor rounded-lg`} onClick={() => setSelectedCategory("Popular")}>
							Popular
						</button>
						<button className={`bg-${selectedCategory === "Recent" ? "fatePrimary" : "white"} ${selectedCategory === "Recent" ? "text-white" : "text-black"} px-3 py-2 mr-2 w-fit cursor rounded-lg`} onClick={() => setSelectedCategory("Recent")}>
							Recent
						</button>
						<p className="block mt-4 text-sm ">
							Showing {filteredBlogPosts.length} '{selectedCategory}' blog posts out of {blogPostData.length}
						</p>
					</div>

					<div className="flex flex-wrap">
						{filteredBlogPosts.map((blog, key) => {
							return <AsideBlogCard key={key} date={blog.date} CardTitle={blog.cardTitle} CardDescription={blog.cardDescription} image={blog.image} author={blog.author} alt={blog.alt} category={blog.category} />;
						})}
					</div>
					<BlogArchive />
				</div>
			</section>
		</>
	);
};

export default BlogPost;
