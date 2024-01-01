const BlogCard = ({ image, date, CardTitle, CardDescription }) => {
	return (
		<>
			<div className="w-full px-1">
				<div className="mb-12 w-full relative">
					<img
						src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your image URL
						alt="{blog.imageAlt}"
						className="blog-image h-full w-full object-cover"
					/>
					<p className="mt-4 mb-4">
						<i className="bi bi-pencil-square"></i> Hari Sanjel &nbsp;&nbsp; <i className="bi bi-calendar3"></i>
						&nbsp;September 21, 2023
					</p>
					<h1 className="blog-title text-teal-900 text-xl mt-2 mb-2">Heading goes here</h1>
					<p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum provident dolores nobis officiis neque delectus at, rem ut soluta enim quibusdam explicabo porro illum consequatur earum ipsam quam dicta deserunt?</p>
					<div className="bg-teal-900 absolute top-2 left-2 text-white w-20 text-center px-0 py-1">popular</div>
				</div>
			</div>
		</>
	);
};
export default BlogCard;
