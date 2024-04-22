const BlogCard = ({ image, alt, date, CardTitle, CardDescription, author, category }) => {
	return (
		<>
			<div className="w-full">
				<div className="mb-16 w-full relative">
					<img src={image} alt={alt} className="blog-image h-full w-full object-cover" />
					<h1 className="blog-title text-teal-900 text-xl mt-6 mb-2">{CardTitle}</h1>
					<p className="mt-2 mb-4">
						<i className="bi bi-pencil-square"></i> {author} &nbsp;&nbsp; <i className="bi bi-calendar3"></i>
						&nbsp;{date}
					</p>
					<p className="mt-4">{CardDescription}</p>
					<div className="bg-teal-900 absolute top-2 left-2 text-white w-20 text-center px-0 py-1">{category}</div>
				</div>
			</div>
		</>
	);
};
export default BlogCard;
