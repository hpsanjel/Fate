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
					className="flex space-x-12"
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
						<a key={`${university.id}-${university.University}`} href={university.Website} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center w-96 h-42 p-4 rounded-lg transition-all duration-300 hover:scale-105 group">
							<img src="/images/objective.png" alt={`${university.University} Logo`} className="w-20 h-20 object-cover rounded-full mb-4 group-hover:scale-110 transition-transform duration-300" />
							<p className="text-sm font-medium text-center px-2 text-slate-600 group-hover:font-md group-hover:text-fatePrimary transition-colors duration-300">{university.University}</p>
						</a>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default SlidingUniversities;
