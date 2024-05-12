import React, { useState, useEffect } from "react";
import Banner from "../../Includes/Banner";
import BlogAside from "./BlogAside";
import BlogPosts from "./MainBlogData";
import { Link, useNavigate } from "react-router-dom";
import { slugify } from "../../Includes/Slugify";
import SectionHeader from "../../Includes/SectionHeader";
import PrimaryButton from "../../Includes/PrimaryButton";

const Blog = () => {
	// const [sortedPosts, setSortedPosts] = useState([]);
	const [searchBlogsKey, setSearchBlogsKey] = useState("");
	const [searchBlogsResults, setSearchBlogsResults] = useState([]);
	const [noResultsFound, setNoResultsFound] = useState(false);

	const navigate = useNavigate();

	const howManyPosts = BlogPosts.slice(0, 6);
	const pageTitle = "Blog";
	const breadcrumbs = ["Home", "Blog"];
	const bgimage = 'url("/images/headerbanner.png")';

	// useEffect(() => {
	// 	const sortedByDate = [...howManyPosts].sort((a, b) => new Date(b.blogDate) - new Date(a.blogDate));
	// 	setSortedPosts(sortedByDate);
	// }, []);

	useEffect(() => {
		const filteredPosts = howManyPosts.filter((post) => post.blogTitle.toLowerCase().includes(searchBlogsKey.toLowerCase()) || post.blogContent.toLowerCase().includes(searchBlogsKey.toLowerCase()));
		setSearchBlogsResults(filteredPosts);
		setNoResultsFound(filteredPosts.length === 0);
	}, [searchBlogsKey]);

	const handleInputChange = (event) => {
		setSearchBlogsKey(event.target.value);
	};

	const highlightKeyword = (text, keyword) => {
		if (!keyword.trim()) return text;

		const regex = new RegExp(`(${keyword})`, "gi");
		return text.replace(regex, "<mark>$1</mark>");
	};

	// const handleBlog = (e) => {
	// 	setBlog({ ...blog, [e.target.name]: e.target.value });
	// 	console.log(e.target.name, e.target.value);
	// };

	// const handleSubmitBlog = async (e) => {
	// 	e.preventDefault();
	// 	try {
	// 		const response = await fetch("http://localhost:8083/addBlog", {
	// 			method: "POST",
	// 			body: JSON.stringify(blog),
	// 			headers: { "Content-Type": "application/json" },
	// 		});
	// 		toast.success("Success", {
	// 			position: toast.POSITION.TOP_RIGHT,
	// 			autoClose: 2000,
	// 		});
	// 	} catch (error) {
	// 		console.error("Error:", error);
	// 	}
	// 	console.log(blog);
	// };

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="Learn more about us" firstheading={pageTitle} shortdesc="Everything you may like to explore more about Japan and its best offers" />

			<div className="container flex relative">
				<input type="text" className="w-full focus:outline-none border-1 border-slate-300 focus:border-1 focus:border-slate-500 bg-white rounded-md mt-8 p-4 mx-6" placeholder="search blogs..." onChange={handleInputChange}></input>
				<i className="bi bi-search text-lg absolute top-12 right-10"></i>
			</div>
			{/* 
				<form onSubmit={handleSubmitBlog} action="POST">
					Date <input name="date" value={blog.date} onChange={handleBlog} type="date"></input>
					Author <input name="author" value={blog.author} onChange={handleBlog} type="text"></input>
					Title <input name="title" value={blog.title} onChange={handleBlog} type="text"></input>
					Blog Post <br />
					<textarea rows="10" name="blogpost" value={blog.blogpost} onChange={handleBlog} type="text"></textarea>
					<button className="btn primary-btn">Save Blog</button>
				</form>
			 */}

			<div className="container grid md:grid-cols-12">
				{/* <div className="grid col-span-8 overflow-y-scroll no-scrollbar"> */}
				<div className="grid col-span-8">
					<div className="grid grid-cols-1 gap-8 sm:mx-6 mt-7 mb-4 pt-4 pb-4">
						{searchBlogsKey && <span className="text-sm text-green-700 -mt-10">{searchBlogsResults.length > 0 ? `${searchBlogsResults.length} relevant ${searchBlogsResults.length === 1 ? "blog" : "blogs"} found` : <h3 className="text-sm text-red-700">{noResultsFound ? `No results found for the term "${searchBlogsKey}".` : "Loading..."}</h3>}</span>}

						{!noResultsFound &&
							searchBlogsResults.map((blog, index) => (
								<div key={index} className="flex items-center justify-center">
									<div className="relative flex w-full flex-row rounded-lg bg-white bg-clip-border text-gray-700 shadow-md">
										<div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
											<img src={blog.imageSource} alt={blog.imageAlt} className="h-full w-full object-cover" />
										</div>
										<div className="p-6">
											<div className="flex justify-between mb-6 font-sans text-sm font-semibold leading-relaxed tracking-tight text-fatePrimary antialiased">
												<div>
													<i className="bi bi-pencil-square"></i> {blog.blogAuthor}
												</div>
												<div>
													<i className="bi bi-calendar3 mr-1"></i>
													{blog.blogDate}
												</div>
											</div>
											<h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased" dangerouslySetInnerHTML={{ __html: highlightKeyword(blog.blogTitle, searchBlogsKey) }}></h4>
											<p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased" dangerouslySetInnerHTML={{ __html: highlightKeyword(blog.blogContent, searchBlogsKey) }}></p>
											<a className="inline-block" href="#">
												<button
													onClick={() => {
														navigate(`/blog/${slugify(blog.blogTitle)}`);
													}}
													className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-fatePrimary transition-all hover:bg-fatePrimary/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
													type="button"
												>
													Learn More
													<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="h-4 w-4">
														<path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
													</svg>
												</button>
											</a>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>

				<div className="grid col-span-4 h-fit">
					<BlogAside />
				</div>
			</div>
		</>
	);
};

export default Blog;
