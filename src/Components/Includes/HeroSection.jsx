import React from "react";
import StyledButton from "./PrimaryButton";
import OutlinedButton from "./SecondaryButton";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import HeroVideo from "./HeroVideo";
import WhyJapan from "../Pages/Services/WhyJapan";
import SlidingUniversities from "./SlidingUniversities";

const HeroSection = () => {
	const navigate = useNavigate();
	const { t } = useTranslation();

	return (
		<div>
			<div className="flex items-center px-8 h-[650px] opacity-80" style={{ backgroundImage: "url('/images/heroimage.jpeg')" }}>
				<div className="w-fit mx-auto p-6 text-center relative bg-fatePrimary/90">
					<h1 className="font-bold tracking-tight text-white">
						<span className=" text-white text-5xl md:text-6xl">Study and Work in JAPAN 🇯🇵</span>
					</h1>
					<p className="mt-6 text-md md:text-xl text-white">
						Unlock world-className education and endless opportunities with our expert guidance.
						<br /> With our service, you can easily fulfil your dream.
					</p>
					<div>
						<StyledButton type="submit" onClick={() => navigate(`/Contact`)} className="mt-8 mr-4 mb-2">
							Book Consultation
						</StyledButton>
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
