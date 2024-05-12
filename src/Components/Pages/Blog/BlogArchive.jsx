import React from "react";
import BlogPosts from "./MainBlogData";
import { Link, useNavigate } from "react-router-dom";

const blogPosts = BlogPosts;
function BlogArchive({ blogPosts }) {
	function groupPostsByMonth(blogPosts) {
		const archive = {};

		BlogPosts.forEach((post) => {
			const date = new Date(post.blogDate);
			const year = date.getFullYear();
			const month = date.toLocaleString("default", { month: "long" });

			if (!archive[year]) {
				archive[year] = {};
			}
			if (!archive[year][month]) {
				archive[year][month] = [];
			}

			archive[year][month].push(post);
		});

		return archive;
	}
	const archive = groupPostsByMonth(BlogPosts);
	const navigate = useNavigate();

	return (
		<article className="p-8 m-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<h2 className="font-extrabold mb-2 text-xl">Archive</h2>
			<ul>
				{Object.keys(archive).map((year) => (
					<li key={year}>
						<h3>{year}</h3>
						<ul>
							{Object.keys(archive[year]).map((month) => (
								<li key={month}>
									<button
										className="px-2 py-1 mb-4 text-center cursor-pointer"
										onClick={() => {
											navigate(`/blog/${month}`);
										}}
									>
										{month} ({archive[year][month].length})
									</button>
									{/* <Link to={`/articles/<span className="math-inline">\{year\}/</span>{month}`}>
										{month} ({archive[year][month].length})
									</Link> */}
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</article>
	);
}

export default BlogArchive;
