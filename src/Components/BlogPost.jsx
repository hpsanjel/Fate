import React from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";

const BlogPost = () => {
	return (
		<>
			<section className="bg-white pb-10 pt-10 dark:bg-dark lg:pb-20 lg:pt-[40px]">
				<div className="container">
					<h1 className="text-xl bg-slate-100 px-0 py-1 text-center mt-4 mb-6">Our Polular Blogs</h1>
					<div className="flex flex-wrap">
						<BlogCard date="Dec 20, 2023 Hari Sanjel" CardTitle="Benefits of studying in Tokyo" CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image="https://i.ibb.co/Cnwd4q6/image-01.jpg" />
						<BlogCard date="Jan 21, 2022 Jaya Sanjel" CardTitle="Benefits of studying in Osaka" CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image="https://i.ibb.co/Y23YC07/image-02.jpg" />
						<BlogCard date="Nov 22, 2023 Hridaya Sanjel" CardTitle="Benefits of studying in Nagoya" CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image="https://i.ibb.co/7jdcnwn/image-03.jpg" />
					</div>
					<div className="text-md bg-slate-100 p-4">
						<h1 className="text-xl mb-2">Archives</h1>
						<ul>
							<li>June(31)</li>
							<li>May(12)</li>
							<li>April(23)</li>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPost;
