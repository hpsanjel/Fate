import React from "react";
import BlogPosts from "./BlogData";
import { Link } from "react-router-dom";

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

	return (
		<div>
			<h2>Archive</h2>
			<ul>
				{Object.keys(archive).map((year) => (
					<li key={year}>
						<h3>{year}</h3>
						<ul>
							{Object.keys(archive[year]).map((month) => (
								<li key={month}>
									<Link to={`/articles/<span class="math-inline">\{year\}/</span>{month}`}>
										{month} ({archive[year][month].length})
									</Link>
								</li>
							))}
						</ul>
					</li>
				))}
			</ul>
		</div>
	);
}

export default BlogArchive;
