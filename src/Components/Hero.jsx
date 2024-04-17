import React from "react";
// import Slide from "./Slide";
// import SlideData from "./SlideData";
// import SliderForm from "./SliderForm";
import WhyJapan from "./WhyJapan";
import CallToAction from "./CallToAction";
import HeroVideo from "./HeroVideo";
import Destination from "./Destination";
import Blog from "./Blog";
import Gallery from "./Gallery";
import Testimonial from "./Testimonial";
import About from "./About";
import Contact from "./Contact";

const Hero = () => {
	return (
		<>
			{/* <Slide Slides={SlideData} /> */}
			{/* <SliderForm /> */}
			<HeroVideo />
			<CallToAction />
			<WhyJapan />
			<About />
			<Destination />
			<Blog />
			<Gallery />
			<Testimonial />
			<Contact />
			{/* <ApplyToday /> */}
		</>
	);
};

export default Hero;
