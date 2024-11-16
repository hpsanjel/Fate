import React, { useState, useEffect } from "react";
import Banner from "../../Includes/Banner";
import BlogAside from "./BlogAside";
import { Link, useNavigate } from "react-router-dom";
import { slugify } from "../../Includes/Slugify";
import SectionHeader from "../../Includes/SectionHeader";
import { toast } from "react-toastify";

const Blog = () => {
	const [BlogPosts, setBlogPosts] = useState([]);

	const navigate = useNavigate();

	const pageTitle = "Blog";
	const breadcrumbs = ["Home", "Blog"];
	const bgimage = 'url("/images/headerbanner.png")';

	useEffect(() => {
		fetchBlogs();
	}, []);

	const fetchBlogs = async () => {
		try {
			const response = await fetch("http://localhost:8083/blogs");
			const data = await response.json();
			const sortedData = data.sort((a, b) => new Date(b.date) - new Date(a.date));
			setBlogPosts(sortedData);
		} catch (error) {
			console.error("Error fetching blogs:", error);
			toast.error("Error fetching blogs");
		}
	};

	return (
		<div className="container">
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="Explore about Japan" firstheading={pageTitle} shortdesc="You can expand horizon of your knowledge about Study, Job, Culture and many more" />
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-7 pb-12 px-8">
				{BlogPosts.length > 0 ? (
					BlogPosts.map((blog, index) => (
						<div key={index} className="relative flex w-full flex-col sm:flex-row rounded-lg bg-white bg-clip-border text-gray-700 shadow-md mr-8">
							<div className="hidden sm:block relative m-0 h-full w-full sm:w-2/5 shrink-0 overflow-hidden sm:rounded-xl rounded-t-lg sm:rounded-r-none bg-white bg-clip-border text-gray-700">
								<img src={blog.picture} alt={blog?.picture || "Blog image"} className="h-48 sm:h-full w-full object-cover" />
							</div>
							<div className="flex flex-col w-full justify-between p-6 bg-slate-50 m-0.5">
								<div>
									<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">{blog.title}</h4>
									<div className="flex justify-between mb-6 font-sans text-sm font-semibold leading-relaxed tracking-tight text-fatePrimary antialiased">
										<div className="text-xs">
											<i className="bi bi-pencil-square"></i> {blog.author}
										</div>
										<div className="text-xs">
											<i className="bi bi-calendar3 mr-1"></i>
											{blog.date}
										</div>
									</div>
									<p className="mb-2 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">{blog.blogpost}</p>
								</div>
								<a className="inline-block" href="#">
									<button
										onClick={() => {
											navigate(`/blog/${slugify(blog.title)}`);
										}}
										className="flex select-none items-center gap-2 rounded-lg py-1.5 sm:py-3 px-2 sm:px-6 text-center align-middle font-sans text-xs font-bold text-fatePrimary transition-all hover:bg-fatePrimary/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
										type="button"
									>
										Read More
										<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
											<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
										</svg>
									</button>
								</a>
							</div>
						</div>
					))
				) : (
					<div className="grid col-span-2 justify-center items-center w-full h-96">
						<div className="flex flex-col gap-2 items-center justify-center">
							<h1 className="text-6xl text-slate-400 font-bold text-center">Oh! So Sorry!</h1>
							<h2 className="text-3xl text-slate-600 font-bold text-center">No blog posts found</h2>
							<p className="text-lg text-center">Please check back later</p>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Blog;
