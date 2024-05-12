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
		<div className="container">
			<div className="mt-16 md:mt-60 px-8 md:px-0">
				<div className="w-full text-center relative">
					<h1 className="font-bold tracking-tight text-gray-900">
						<span className=" text-fatePrimary text-5xl md:text-6xl">Launch Your Future in JAPAN 🇯🇵</span>
					</h1>
					<p className="mt-2 text-md md:text-xl text-gray-600">
						Unlock world-className education and endless opportunities with our expert guidance.
						<br /> With our service, you can easily fulfil your dream.
					</p>
					<StyledButton type="submit" onClick={() => navigate(`/Contact`)} className="mt-8 mr-2 mb-2">
						Book Consultation
					</StyledButton>
					<OutlinedButton onClick={() => navigate(`/Destination`)} className="mt-2">
						Explore More
					</OutlinedButton>
				</div>
				{/* <HeroVideo /> */}
				<Stats />
				<SlidingUniversities />
			</div>

			{/* <link href="https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css" rel="stylesheet" /> */}
			<WhyJapan />
		</div>
	);
};

export default HeroSection;
