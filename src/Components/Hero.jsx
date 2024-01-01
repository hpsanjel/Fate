import React from "react";
import Slide from "./Slide";
import SlideData from "./SlideData";
import SliderForm from "./SliderForm";
import WhyJapan from "./WhyJapan";
import CallToAction from "./CallToAction";
import HeroVideo from "./HeroVideo";

const Hero = () => {
	return (
		<>
			{/* <Slide Slides={SlideData} /> */}
			<SliderForm />
			<HeroVideo />
			<WhyJapan />
			<CallToAction />
			{/* <ApplyToday /> */}
		</>
	);
};

export default Hero;
