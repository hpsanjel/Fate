import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BlogPost from "./BlogPost";
import BlogPosts from "./BlogData";

const Blog = () => {
	// const [sortedPosts, setSortedPosts] = useState([]);
	const [searchBlogsKey, setSearchBlogsKey] = useState("");
	const [searchBlogsResults, setSearchBlogsResults] = useState([]);
	const [noResultsFound, setNoResultsFound] = useState(false);

	const [blog, setBlog] = useState({});

	const howManyPosts = BlogPosts.slice(0, 6);
	const pageTitle = "Blog";
	const breadcrumbs = ["Home", "Blog"];
	const bgimage = 'url("/images/classroom.png")';

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

	const handleBlog = (e) => {
		setBlog({ ...blog, [e.target.name]: e.target.value });
		console.log(e.target.name, e.target.value);
	};

	const handleSubmitBlog = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch("http://localhost:8083/addBlog", {
				method: "POST",
				body: JSON.stringify(blog),
				headers: { "Content-Type": "application/json" },
			});
			toast.success("Success", {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 2000,
			});
		} catch (error) {
			console.error("Error:", error);
		}
		console.log(blog);
	};

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<div className="container flex justify-center relative">
				<input type="text" className="border-1 border-slate-300 bg-slate-100 rounded-md mt-8 p-4" placeholder="search blogs..." onChange={handleInputChange}></input>
			</div>
			{/* 
			<div className="container w-full md:w-1/4 bg-slate-100 m-4 p-4">
				<form onSubmit={handleSubmitBlog} action="POST">
					Date <input name="date" value={blog.date} onChange={handleBlog} type="date"></input>
					Author <input name="author" value={blog.author} onChange={handleBlog} type="text"></input>
					Title <input name="title" value={blog.title} onChange={handleBlog} type="text"></input>
					Blog Post <br />
					<textarea rows="10" name="blogpost" value={blog.blogpost} onChange={handleBlog} type="text"></textarea>
					<button className="btn primary-btn">Save Blog</button>
				</form>
			</div> */}

			<div className="container grid grid-cols-1 md:grid-cols-3">
				<div className="grid col-span-2">
					<div className="grid grid-cols-1 gap-8 h-fit lg:grid-cols-1 2xl:grid-cols-2 mt-4 mb-4 pt-4 pb-4">
						{noResultsFound ? (
							<h3 className="text-xl text-red-700" style={{ display: noResultsFound ? "block" : "none" }}>
								No results found for the term "{searchBlogsKey}".
							</h3>
						) : (
							searchBlogsResults.map((blog, index) => (
								<div key={index} className="md:my-6 bg-slate-100 p-6">
									<h1 className="blog-title text-teal-900 text-xl mb-4">{blog.blogTitle}</h1>
									<p className="mb-4">
										<i className="bi bi-pencil-square"></i> {blog.blogAuthor} &nbsp;&nbsp; <i className="bi bi-calendar3"></i>
										&nbsp;{blog.blogDate}
									</p>
									<div className="grid md:grid-cols-2 md:gap-4 items-center">
										<img
											src={blog.imageSource} // Replace with your image URL
											alt={blog.imageAlt}
											className="blog-image h-full w-full object-cover"
										/>
										<p className="mt-3">{blog.blogContent}</p>
										{/* <p className="mt-3">{searchBlogsKey !== "" && highlightKeyword(blog.blogContent, searchBlogsKey)}</p> */}
										<div className="flex justify-between">
											<button
												className="bg-teal-900 px-1 mt-3 py-2 w-32 text-center cursor-pointer text-white"
												onClick={(e) => {
													console.log("Clicked");
												}}
											>
												Read More
											</button>
											<div className="flex">
												<i className="bi bi-hand-thumbs-up mr-2 bg-zinc-300 text-teal-900 hover:bg-teal-900 px-1 py-2 w-10 text-center hover:text-white mt-3 transition-all duration-200 delay-75 ease-in-out"></i>
												<i className="bi bi-share bg-teal-900 px-1 py-2 w-10 text-center text-white mt-3"></i>
											</div>
										</div>
									</div>
								</div>
							))
						)}
					</div>
				</div>

				<div className="grid col-span-1">
					<BlogPost />
				</div>
			</div>
		</>
	);
};

export default Blog;
