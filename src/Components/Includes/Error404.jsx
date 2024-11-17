import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
import axios from "axios";

const Error404 = () => {
	const [data, setData] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchData = () => {
			axios
				.get(`${process.env.NEXT_PUBLIC_API_URL}/getBlogs`)
				.then((response) => {
					setData(response.data);
				})
				.catch((error) => {
					console.error("Error fetching blogs:", error);
				});
		};
		fetchData();
	}, []);

	return (
		<>
			<div className=" text-center p-20 min-h-screen bg-slate-100 rounded-lg mt-20">
				<h1 className="text-lg mt-20">Error 404</h1>
				<h3>Sorry, this page is not available right now!</h3>
				<h4> Please visit later.</h4>
				<br />
				<button onClick={() => navigate(-1)}>Go Back</button>
			</div>
			<div>
				<div>
					{/* Display fetched data */}
					{data.map((blog, index) => (
						<div key={index}>
							<div className="md:my-6 bg-slate-100 p-6">
								<h1 className="blog-title text-fatePrimary text-xl mb-4">{blog.title}</h1>
								<p className="mb-4">
									<i className="bi bi-pencil-square"></i> {blog.author} &nbsp;&nbsp; <i className="bi bi-calendar3"></i>
									&nbsp;{blog.date}
								</p>
								<div className="grid md:grid-cols-2 md:gap-4 items-center">
									<img
										src={blog.imageSource} // Replace with your image URL
										alt={blog.imageAlt}
										className="blog-image h-full w-full object-cover"
									/>
									<p className="mt-3">{blog.blogpost}</p>
									{/* <p className="mt-3">{searchBlogsKey !== "" && highlightKeyword(blog.blogContent, searchBlogsKey)}</p> */}
									<div className="flex justify-between">
										<button
											className="bg-fatePrimary px-1 mt-3 py-2 w-32 text-center cursor-pointer text-white"
											onClick={(e) => {
												console.log("Clicked");
											}}
										>
											Read More
										</button>
										<div className="flex">
											<i className="bi bi-hand-thumbs-up mr-2 bg-zinc-300 text-fatePrimary hover:bg-fatePrimary px-1 py-2 w-10 text-center hover:text-white mt-3 transition-all duration-200 delay-75 ease-in-out"></i>
											<i className="bi bi-share bg-fatePrimary px-1 py-2 w-10 text-center text-white mt-3"></i>
										</div>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default Error404;
