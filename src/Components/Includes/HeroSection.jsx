import React from "react";
import PrimaryButton from "./PrimaryButton";
import OutlinedButton from "./SecondaryButton";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";
import WhyJapan from "../Pages/Services/WhyJapan";
import SlidingUniversities from "./SlidingUniversities";

const HeroSection = () => {
	const navigate = useNavigate();

	return (
		<div className="container">
			<div className="flex flex-col relative items-center px-8 h-[650px] justify-center">
				<img src="/images/slide5 Large.jpeg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover backdrop-blur-xl" />
				<div className="absolute inset-0 bg-green-900 opacity-30"></div>

				<div className="max-w-2xl lg:max-w-4xl w-fit mx-auto p-8 text-center relative">
					<h1 className="font-serif tracking-tight">
						<span className=" text-white text-4xl md:text-5xl lg:text-6xl">Study and Work in JAPAN</span>
					</h1>
					<p className="mt-6 font-bold text-md md:text-lg lg:text-xl text-fateSecondaryLight">Unlock world-class education and endless opportunities with our expert guidance. With our service, you can easily fulfil your dream.</p>
					<div>
						<PrimaryButton type="submit" onClick={() => navigate(`/Contact`)} className="mt-8 mr-4 mb-2">
							Book Consultation
						</PrimaryButton>

						<OutlinedButton onClick={() => navigate(`/Destination`)} className="mt-2">
							Explore More
						</OutlinedButton>
					</div>
				</div>
				{/* <HeroVideo /> */}
			</div>
			<Stats />
			<SlidingUniversities />
			<WhyJapan />
		</div>
	);
};

export default HeroSection;
