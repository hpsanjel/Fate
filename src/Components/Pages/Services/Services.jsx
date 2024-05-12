import React from "react";
import { FeatureCard } from "../../Includes/FeatureCard";

const Services = () => {
	return (
		<section className="w-full">
			<div className=" container grid grid-cols-1 gap-6 p-12 my-6 text-center md:grid-cols-3 md:gap-6 md:my-6 lg:grid-cols-4 ">
				<FeatureCard image="/images/location.png" altimage="location icon" imgwidth={56} feature="Centered Location" />

				<FeatureCard image="/images/support.png" altText="image1" imgwidth={56} feature="24/7 Support" />
				<FeatureCard image="/images/classroom.png" altText="image2" imgwidth={56} feature="Well-equipped Classroom" />

				<FeatureCard image="/images/documentation.png" altText="image3" imgwidth={56} feature="Proper Documentation" />

				<FeatureCard image="/images/free.png" altText="image4" imgwidth={56} feature="Free Services" />

				<FeatureCard image="/images/classroom.png" altText="image5" imgwidth={56} feature="Well-equipped Classroom" />

				<FeatureCard image="/images/documentation.png" altText="image6" imgwidth={56} feature="Proper Documentation" />

				<FeatureCard image="/images/parking.png" altText="image7" imgwidth={56} feature="Free Parking" />
			</div>
		</section>
	);
};

export default Services;
