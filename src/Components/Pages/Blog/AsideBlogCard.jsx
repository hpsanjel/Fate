import { Link, useNavigate } from "react-router-dom";
import { slugify } from "../../Includes/Slugify";
const AsideBlogCard = ({ image, alt, date, CardTitle, CardDescription, author, category }) => {
	const navigate = useNavigate();

	return (
		<>
			<article className="mt-0 m-8 overflow-hidden rounded-lg shadow transition hover:shadow-lg">
				<img src={image} alt={alt} className="h-56 w-full object-cover" />

				<div className="bg-white p-4 sm:p-6">
					<time dateTime="2022-10-10" className="block text-xs text-gray-500">
						{date}
					</time>

					<Link to={`/blog/${slugify(CardTitle)}`} className="">
						<h3 className="mt-0.5 text-lg text-gray-900 hover:text-fatePrimary active:text-fateSecondaryDark">{CardTitle}</h3>
					</Link>

					<p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">{CardDescription}</p>
				</div>
			</article>
		</>
	);
};
export default AsideBlogCard;
