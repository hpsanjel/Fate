import React from "react";
import { FeatureCard } from "./FeatureCard";

const Services = () => {
	return (
		<div className="grid grid-cols-1 gap-6 p-12 my-6 text-center md:grid-cols-3 md:gap-6 md:my-6 lg:grid-cols-4 bg-white">
			<FeatureCard image="/images/location.png" altimage="location icon" imgwidth="75px" feature="Centered Location" />

			<FeatureCard image="/images/support.png" altText="image1" imgwidth={75} feature="24/7 Support" />
			<FeatureCard image="/images/classroom.png" altText="image1" imgwidth={75} feature="Well-equipped Classroom" />

			<FeatureCard image="/images/documentation.png" altText="image1" imgwidth={75} feature="Proper Documentation" />

			<FeatureCard image="/images/free.png" altText="image1" imgwidth={75} feature="Free Services" />

			<FeatureCard image="/images/classroom.png" altText="image1" imgwidth={75} feature="Well-equipped Classroom" />

			<FeatureCard image="/images/documentation.png" altText="image1" imgwidth={75} feature="Proper Documentation" />

			<FeatureCard image="/images/parking.png" altText="image1" imgwidth={75} feature="Free Parking" />
		</div>
	);
};

export default Services;
