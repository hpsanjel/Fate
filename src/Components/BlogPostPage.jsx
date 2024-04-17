// BlogPostPage.js
import React from "react";
import BlogPosts from "./BlogData";
import { useParams } from "react-router-dom";
import SectionHeader from "./SectionHeader";
import { slugify } from "./Slugify";
import BlogPost from "./BlogPost";
import Gallery from "./Gallery";
import CallToAction from "./CallToAction";
import { Link } from "react-router-dom";

const BlogPostPage = () => {
	const { blogTitle } = useParams();

	const blogPost = BlogPosts.find((blog) => slugify(blog.blogTitle) == blogTitle);

	if (!blogPost) {
		return <div>Blog post not found!</div>;
	}

	return (
		<>
			<SectionHeader firstheading={blogPost.blogTitle} />
			<div className=" container mb-12">
				<div className="flex justify-between">
					<p>
						<i className="bi bi-calendar3"></i> {blogPost.blogDate}
					</p>
					<p>
						<i className="bi bi-pencil-square"></i> {blogPost.blogAuthor}
					</p>
				</div>

				<img className="w-100vw mb-8" src={blogPost.imageSource} alt={blogPost.imageAlt} />
				<p className="mb-8">{blogPost.blogContent}</p>
			</div>
		</>
	);
};

export default BlogPostPage;
