import React from "react";
import SectionHeader from "./SectionHeader";
import BlogCard from "./BlogCard";

const BlogPost = () => {
	return (
		<>
			<section className="bg-white pb-10 pt-10 dark:bg-dark lg:pb-20">
				<div className="container">
					<h1 className="text-xl bg-slate-100 px-0 py-1 text-center mb-6">Our Polular Blogs</h1>
					<div className="flex flex-wrap">
						<BlogCard date="Dec 20, 2023" CardTitle="Benefits of studying in Tokyo" CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image="https://i.ibb.co/Cnwd4q6/image-01.jpg" author="Hari Sanjel" alt="image1" category="Popular" />
						<BlogCard date="Jan 21, 2022" CardTitle="Pros of studying in Osaka" CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image="https://i.ibb.co/Y23YC07/image-02.jpg" author="Hridaya Sanjel" alt="image2" category="Recent" />
						<BlogCard date="Nov 22, 2023" CardTitle="Advantages of studying in Nagoya" CardDescription="Lorem Ipsum is simply dummy text of the printing and typesetting industry." image="https://i.ibb.co/7jdcnwn/image-03.jpg" author="Jaya Sanjel" alt="image3" category="Popular" />
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
