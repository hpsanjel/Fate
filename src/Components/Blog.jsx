import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import BlogPost from "./BlogPost";
import BlogPosts from "./BlogData";
import StyledButton from "./Button";
import { Link, useNavigate } from "react-router-dom";
import { slugify } from "./Slugify";
import SectionHeader from "./SectionHeader";

const Blog = () => {
	// const [sortedPosts, setSortedPosts] = useState([]);
	const [searchBlogsKey, setSearchBlogsKey] = useState("");
	const [searchBlogsResults, setSearchBlogsResults] = useState([]);
	const [noResultsFound, setNoResultsFound] = useState(false);
	const [likes, setLikes] = useState(0);
	const [likedBlogs, setLikedBlogs] = useState({});

	const [blog, setBlog] = useState({});
	const [blogs, setBlogs] = useState([]);

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

	const handleLikeClick = (blogTitle) => {
		console.log("likedBlogs (before):", likedBlogs); // Add this line
		setLikedBlogs((prevState) => ({
			...prevState,
			[blogTitle]: !likedBlogs[blogTitle],
		}));
		console.log("likedBlogs (after):", likedBlogs); // Add this line
	};

	const highlightKeyword = (text, keyword) => {
		if (!keyword.trim()) return text; // Return original text if the keyword is empty

		const regex = new RegExp(`(${keyword})`, "gi"); // Create a case-insensitive regex pattern for the keyword
		return text.replace(regex, "<mark>$1</mark>"); // Wrap the keyword matches in <mark> tags for highlighting
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
			{/* <Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} /> */}
			<SectionHeader firstline="Learn more" firstheading={pageTitle} shortdesc="Everything you may like to explore more about Japan" />

			<div className="container flex justify-center relative">
				<input type="text" className="border-1 border-slate-300 bg-white rounded-md mt-8 p-4" placeholder="search blogs..." onChange={handleInputChange}></input>
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
				<div className="grid col-span-2 h-fit">
					<div className="grid grid-cols-1 gap-8 mt-7 mb-4 pt-4 pb-4">
						{searchBlogsKey && <span className="text-lg text-green-700 -mt-10">{searchBlogsResults.length > 0 ? `${searchBlogsResults.length} relevant ${searchBlogsResults.length === 1 ? "blog" : "blogs"} found` : <h3 className="text-lg text-red-700">{noResultsFound ? `No results found for the term "${searchBlogsKey}".` : "Loading..."}</h3>}</span>}

						{!noResultsFound &&
							searchBlogsResults.map((blog, index) => (
								<div key={index} className="md:my-0 bg-white p-6">
									<h1 className="blog-title text-teal-900 text-xl mb-4" dangerouslySetInnerHTML={{ __html: highlightKeyword(blog.blogTitle, searchBlogsKey) }}></h1>
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
										<p className="mt-3" dangerouslySetInnerHTML={{ __html: highlightKeyword(blog.blogContent, searchBlogsKey) }}></p>
										{/* <p className="mt-3">{searchBlogsKey !== "" && highlightKeyword(blog.blogContent, searchBlogsKey)}</p> */}
										<div className="flex justify-between">
											<button
												className="bg-teal-900 px-1 mt-3 py-2 w-32 text-center cursor-pointer text-white"
												onClick={() => {
													navigate(`/blog/${slugify(blog.blogTitle)}`);
												}}
											>
												Read More
											</button>
											<div className="flex">
												{/* <i
													className="bi bi-hand-thumbs-up mr-2 px-1 py-2 w-10 text-center mt-3 transition-all duration-200 delay-75 ease-in-out"
													onClick={() => handleLikeClick(blog.blogTitle)} // Pass the blogTitle
													style={{
														backgroundColor: likedBlogs[blog.blogTitle] ? "teal-900" : "zinc-300",
														color: likedBlogs[blog.blogTitle] ? "teal-900" : "teal-900",
													}}
												></i> */}
												{/* <FBShareButton blogTitle={blog.blogTitle} blogUrl={`http://localhost:5173/blog/${blog.blogTitle}`} /> */}
											</div>
										</div>
									</div>
								</div>
							))}
					</div>
				</div>

				<div className="grid col-span-1 h-fit">
					<BlogPost />
				</div>
			</div>
		</>
	);
};

export default Blog;
