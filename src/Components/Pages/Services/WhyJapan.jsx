import React from "react";
import SectionHeader from "../../Includes/SectionHeader";
import SecondaryButton from "../../Includes/SecondaryButton";

const WhyJapan = () => {
	const cards = [
		{
			title: "Unique Educational Programs",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg",
			description: "Japan's education system offers unique programs beyond traditional academics. You can delve into specific aspects of Japanese culture like noodle-making at specialized schools or learn about anime and manga through pop culture studies programs.  For a deeper immersion, universities like Akita International University offer programs entirely in English with a focus on international collaboration or local area.",
			link: "/culture-page",
		},
		{
			title: "Cultural Experiences",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/online_study-011feaaa33df196e1ae0.svg",
			description: "Japan offers a wealth of cultural experiences for visitors. Immerse yourself in the tranquility of a tea ceremony, or don a kimono and stroll through a picturesque garden. You can learn the art of flower arranging, watch a sumo wrestling match, or bathe in a soothing onsen hot spring. From attending vibrant festivals to appreciating ancient temples, Japan provides a unique chance to connect with its rich traditions. Enjoy every little bit here.",
			link: "/landscape-page",
		},
		{
			title: "Career Prospects",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg",
			description: "Japan offers a dynamic job market with strong prospects in several sectors. Tech fields like software engineering and IT are booming, while engineers across various disciplines are also in high demand. The aging population fuels a need for medical professionals, especially doctors and surgeons. If you're a native English speaker, teaching remains a popular option.  Overall, fluency in Japanese will give you a significant edge.",
			link: "/food-page",
		},
		{
			title: "Carddeer Prospects",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg",
			description: "Japdan offers a dynamic job market with strong prospects in several sectors. Tech fields like software engineering and IT are booming, while engineers across various disciplines are also in high demand. The aging population fuels a need for medical professionals, especially doctors and surgeons. If you're a native English speaker, teaching remains a popular option.  Overall, fluency in Japanese will give you a significant edge.",
			link: "/food-pdage",
		},
	];

	return (
		<div className="mt-60">
			<SectionHeader firstline="Why Study in Japan" firstheading="Explore the reasons why" shortdesc="Get to know more why Japan might be your best destination for study, work and live" />
			<div className="container bg-fateSecondaryDark/40 grid md:grid-cols-2 sm:grid-cols-12 items-center p-6 ">
				{cards.map((card, index) => (
					<div key={index} className={`items-center p-12 ${index % 3 === 0 ? "md:bg-fatePrimary md:text-white" : ""} bg-white sm:text-inherit`}>
						<div className="sm:col-span-5 md:col-span-1 text-center">
							<img className="mx-auto mb-4 w-40" src={card.imageUrl} alt={card.title} />
							<h3 className="text-lg font-bold">{card.title}</h3>
						</div>
						<p className="sm:col-span-7 md:col-span-1 p-12 sm:p-2">{card.description}</p>
					</div>
				))}
			</div>
			<div className="mt-12 mb-24" style={{ display: "flex", justifyContent: "center" }}>
				<SecondaryButton type="submit" onClick={() => navigate(`/Destination`)}>
					Explore More Reasons
				</SecondaryButton>
			</div>
		</div>
	);
};

export default WhyJapan;
