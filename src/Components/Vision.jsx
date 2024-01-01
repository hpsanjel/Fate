import React from "react";

export const Vision = () => {
	return (
		<div className="container grid grid-cols-1 gap-6 p-12 my-6 bg-slate-100 text-center overflow-x-scroll md:text-left md:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:gap-10">
			<div className="border-2 bg-white rounded-md flex flex-col items-center gap-6 p-6">
				<strong>Vision</strong>
				<img src="/images/vision.png" alt="Vision" width={75}></img>
				<p>Empowering Nepali students to bridge cultural gaps, excel in Japanese language, and thrive in Japan's educational and professional landscape through tailored guidance and immersive experiences.</p>
			</div>
			<div className=" border-2 bg-white rounded-md flex flex-col items-center gap-6 p-6">
				<strong>Mission</strong>
				<img src="/images/mission.png" alt="Mission" width={75}></img>
				<p>To provide comprehensive support and guidance to Nepali students aspiring to learn Japanese language, engage in cultural exchanges, and pursue academic and professional opportunities in Japan, fostering their personal growth and success.</p>
			</div>
			<div className="border-2 bg-white rounded-md flex flex-col items-center gap-6 p-6">
				<strong>Objectives</strong>
				<img src="/images/objective.png" alt="Objectives" width={75}></img>
				<p>To provide comprehensive support and guidance to Nepali students aspiring to learn Japanese language, engage in cultural exchanges, and pursue academic and professional opportunities in Japan, fostering their personal growth and success.</p>
			</div>
		</div>
	);
};

export default Vision;
