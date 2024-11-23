import React, { useEffect, useState } from "react";
import StudyDestinations from "../Pages/Destination/StudyDestination";
import { motion } from "framer-motion";

const SlidingUniversities = () => {
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		const extendedUniversities = [...StudyDestinations, ...StudyDestinations];
		setUniversities(extendedUniversities);
	}, []);

	const [universities, setUniversities] = useState(StudyDestinations);

	return (
		<div className="relative overflow-hidden w-full mt-12 py-8 bg-gradient-to-r from-green-50 to-blue-50">
			<h2 className="text-4xl font-bold text-center mb-6 text-fatePrimary">Featured Universities</h2>
			<div className="relative overflow-hidden" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
				<motion.div
					className="flex space-x-4"
					animate={{
						x: isHovered ? ["0%", "-50%"] : ["0%", "-50%"],
					}}
					transition={{
						x: {
							repeat: Infinity,
							repeatType: "loop",
							duration: 20,
							ease: "linear",
						},
					}}
				>
					{universities.map((university) => (
						<div key={`${university.id}-${university.University}`} className="w-[200px] p-4 flex-shrink-0 hover:bg-fatePrimary/10 hover:rounded-lg">
							<a href={university.Website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-full h-42 p-2 rounded-lg ">
								<img src={university.region_img} alt={`${university.University} Logo`} className="w-12 h-12 object-cover rounded-full mb-4 " />
								<p className="text-sm font-medium text-center px-2 text-slate-600 ">{university.University}</p>
							</a>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default SlidingUniversities;
