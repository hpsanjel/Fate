import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "lucide-react";

const WhyJapan = () => {
	const navigate = useNavigate();

	const cards = [
		{
			title: "Unique Educational Programs",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg",
			description: "Japan's education system offers unique programs beyond traditional academics. You can delve into specific aspects of Japanese culture like noodle-making at specialized schools or learn about anime and manga through pop culture studies programs.",
			link: "/culture-page",
		},
		{
			title: "Cultural Experiences",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/online_study-011feaaa33df196e1ae0.svg",
			description: "Japan offers a wealth of cultural experiences for visitors. Immerse yourself in the tranquility of a tea ceremony, or don a kimono and stroll through a picturesque garden. You can learn the art of flower arranging or bathe in a soothing onsen hot spring.",
			link: "/landscape-page",
		},
		{
			title: "Career Prospects",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/job_ready-7cd674ffd711044da492.svg",
			description: "Japan offers a dynamic job market with strong prospects in several sectors. Tech fields like software engineering and IT are booming, while engineers across various disciplines are also in high demand. The aging population fuels a need for medical professionals.",
			link: "/career-page",
		},
		{
			title: "Technological Innovation",
			imageUrl: "https://openclassrooms.com/modules/sdzv4-main/latest/images/mentoring-d3132f53ba0a521499a9.svg",
			description: "Japan is at the forefront of technological innovation. From robotics to artificial intelligence, studying in Japan provides exposure to cutting-edge technologies and research opportunities in world-class facilities.",
			link: "/innovation-page",
		},
	];

	return (
		<section className="p-6 sm:p-12 bg-gradient-to-b from-white to-green-50">
			<div className=" mx-auto px-4">
				<div className="text-center mb-12">
					<h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">Why Study in Japan?</h2>
					<p className="text-lg text-gray-600 max-w-2xl mx-auto">Explore the reasons why Japan might be your best destination for study, work, and life</p>
				</div>

				<div className="grid md:grid-cols-2 gap-8 mb-12">
					{cards.map((card, index) => (
						<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
							<div className="p-6">
								<div className="flex items-center mb-4">
									<img className="w-16 h-16 rounded-full mr-4" src={card.imageUrl} alt={card.title} />
									<h3 className="text-xl font-semibold text-green-700">{card.title}</h3>
								</div>
								<p className="text-gray-600 mb-4">{card.description}</p>
								<button onClick={() => navigate(card.link)} className="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors duration-300">
									Learn More
									<ArrowRightIcon className="ml-2 w-4 h-4" />
								</button>
							</div>
						</motion.div>
					))}
				</div>

				<div className="text-center">
					<button onClick={() => navigate("/Destination")} className="bg-fatePrimary text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
						Explore More Reasons
					</button>
				</div>
			</div>
		</section>
	);
};

export default WhyJapan;
