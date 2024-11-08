import React from "react";
import PrimaryButton from "./PrimaryButton";
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
			<div className="flex relative items-center px-8 h-[650px] opacity-80">
				<img src="/images/heroimage.jpeg" alt="Hero Image" className="absolute inset-0 w-full h-full object-cover" />

				<div className="max-w-2xl w-fit mx-auto p-8 text-center relative bg-[#dddbd7]">
					<h1 className="font-bold tracking-tight">
						<span className=" text-black text-4xl md:text-5xl">Study and Work in JAPAN</span>
					</h1>
					<p className="mt-6 text-md md:text-xl text-black">
						Unlock world-className education and endless opportunities with our expert guidance.
						<br /> With our service, you can easily fulfil your dream.
					</p>
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
