import React from "react";
import SectionHeader from "./SectionHeader";

const WhyJapan = () => {
	const cards = [
		{
			title: "Rich Culture",
			imageUrl: "https://lh5.googleusercontent.com/p/AF1QipM98E0lBOaYthIn92V7tcew5b7Wou-qPRfNUzKf=w1080-h624-n-k-no",
			description: "Discover Japan's rich cultural heritage and traditions.",
			link: "/culture-page",
		},
		{
			title: "Scenic Landscapes",
			imageUrl: "https://images.unsplash.com/photo-1422065254131-0959ca26ded4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fFNjZW5pYyUyMExhbmRzY2FwZXMlMjBqYXBhbnxlbnwwfHwwfHx8MA%3D%3D",
			description: "Explore breathtaking landscapes and natural beauty.",
			link: "/landscape-page",
		},
		{
			title: "Culinary Delights",
			imageUrl: "https://images.unsplash.com/photo-1501560379-05951a742668?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fEN1bGluYXJ5JTIwRGVsaWdodHMlMjBqYXBhbnxlbnwwfHwwfHx8MA%3D%3D",
			description: "Experience the delicious Japanese cuisine.",
			link: "/food-page",
		},
	];

	return (
		<>
			<SectionHeader />

			<div className="bg-teal-900 pt-20 pb-20">
				<h1 className="text-3xl text-center p-2 text-white">Why is Japan so popular destination</h1>
				<h1 className="text-xl text-center p-2 mb-10 text-gray-300">Explore why Japan is considered as one of the best study destination for international students.</h1>

				<div className="container why-fate grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
					{cards.map((card, index) => (
						<div className="card relative" key={index}>
							<img src={card.imageUrl} alt={card.title} className="-my-4" />
							<p className="absolute top-0 left-4 bg-slate-300 text-xs rounded-full">{card.title}</p>
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
