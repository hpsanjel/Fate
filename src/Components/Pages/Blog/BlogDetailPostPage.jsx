import React from "react";
import { useParams } from "react-router-dom";
import SectionHeader from "../../Includes/SectionHeader";
import BlogAside from "./BlogAside";

import AsideBlogCard from "./AsideBlogCard";

const BlogDetailPostPage = () => {
	const { blogTitle } = useParams();

	// const blogPost = BlogPosts.find((blog) => slugify(blog.blogTitle) == blogTitle);
	// const filteredPosts = BlogPosts.filter((post) => post.blogTitle !== blogPost.blogTitle);

	return (
		<>
			<SectionHeader firstheading="Blog Posts" />
			{/* <div className=" grid grid-cols-3 mb-12">
				<div id="main-blog-detail-page" className="text-white h-fit px-14 col-span-2 bg-fatePrimary">
					<h1 className="text-3xl font-bold text-center mt-12">{blogPost.blogTitle}</h1>
					<div className="flex justify-between my-12 bg-slate-100 px-8 py-2 text-fatePrimary rounded-md">
						<p>
							<i className="bi bi-calendar3"></i> {blogPost.blogDate}
						</p>
						<p>
							<i className="bi bi-pencil-square"></i> {blogPost.blogAuthor}
						</p>
					</div>
					<div className="grid grid-cols-2 gap-8 my-12">
						<img className="w-full object-cover mb-8 rounded-lg" src={blogPost.imageSource} alt={blogPost.imageAlt} />
						<p className="mb-8">{blogPost.blogContent}</p>
					</div>
				</div>
				<div id="more-blogs-aside" className="grid grid-col-1 col-span-1">
					<BlogAside />
					<div className="mb-24 bg-gradient-to-r to-fateSecondaryLight/10 from-fateSecondaryDark/10">
						{filteredPosts.map((blog, index) => {
							return <AsideBlogCard key={index} date={blog.blogDate} CardTitle={blog.blogTitle} CardDescription={blog.blogContent} image={blog.imageSource} author={blog.blogAuthor} alt={blog.imageAlt} />;
						})}
					</div>
				</div>
			</div> */}
		</>
	);
};

export default BlogDetailPostPage;
