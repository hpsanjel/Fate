import React from "react";
import InfoCard from "./InfoCard";

export const Vision = () => {
	return (
		<div className="bg-lime-50">
			<div className="container grid grid-cols-1 gap-6 p-4 my-6 text-center overflow-x-scroll md:text-left md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-10">
				<InfoCard title="Vision" image="/images/vision.png" altText="Vision" description="Empowering Nepali students to bridge cultural gaps, excel in Japanese language, and thrive in Japan's educational and professional landscape through tailored guidance and immersive experiences." />

				<InfoCard title="Mission" image="/images/mission.png" altText="Mission" description="To provide comprehensive support and guidance to Nepali students aspiring to learn Japanese language, engage in cultural exchanges, and pursue academic and professional opportunities in Japan, fostering their personal growth and success." />

				<InfoCard title="Objectives" image="/images/objective.png" altText="Objectives" description="To provide comprehensive support and guidance to Nepali students aspiring to learn Japanese language, engage in cultural exchanges, and pursue academic and professional opportunities in Japan, fostering their personal growth and success." />
			</div>
		</div>
	);
};

export default Vision;
