import React from "react";
import SectionHeader from "./SectionHeader";

const WhyJapan = () => {
	const cards = [
		{
			title: "Unique Educational Programs",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg",
			description: "Discover Japan's rich cultural heritage and traditions.",
			link: "/culture-page",
		},
		{
			title: "Cultural Experiences",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/online_study-011feaaa33df196e1ae0.svg",
			description: "Explore breathtaking landscapes and natural beauty.",
			link: "/landscape-page",
		},
		{
			title: "Career Prospects",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg",
			description: "Experience the delicious Japanese cuisine.",
			link: "/food-page",
		},
	];

	return (
		<>
			<div className=" bg-lime-50 py-10">
				<h1 className="text-3xl text-center p-2 text-black">Why is Japan a popular destination</h1>
				<h1 className="text-xl text-center p-2 mb-2 text-gray-700">Explore why Japan is considered as one of the best study destination for international students.</h1>

				<div className="container why-fate grid grid-cols-1 place-items-center text-center md:grid-cols-2 lg:grid-cols-3">
					{cards.map((card, index) => (
						<div className="card border border-transparent transition duration-300 hover:border hover:border-teal-400 hover:-translate-y-0.5 hover:shadow-md p-8" key={index}>
							<img className="mx-auto" src={card.imageUrl} alt={card.title} />
							<h3 className="text-lg font-bold">{card.title}</h3>
							<p>{card.description}</p>
							{/* <a href={card.link} className="btn-primary">
								Learn More
							</a> */}
						</div>
					))}
				</div>
			</div>
		</>
	);
};

export default WhyJapan;
