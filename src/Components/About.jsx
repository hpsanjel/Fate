import React from "react";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";
import Vision from "./Vision";
import { FeatureCard } from "./FeatureCard";

const About = () => {
	const pageTitle = "About Us";
	const breadcrumbs = ["Home", "About Us"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			{/* <Example /> */}
			<div className="container">
				<SectionHeader first_heading="Heading" />
				<div className="grid grid-cols-1 gap-6 p-4 mb-24 text-center md:grid-cols-3 md:gap-6 lg:grid-cols-4">
					<FeatureCard image="/images/location.png" altimage="location icon" imgwidth="75px" feature="Centered Location" />

					<FeatureCard image="/images/support.png" altText="image1" imgwidth={75} feature="24/7 Support" />
					<FeatureCard image="/images/classroom.png" altText="image1" imgwidth={75} feature="Well-equipped Classroom" />

					<FeatureCard image="/images/documentation.png" altText="image1" imgwidth={75} feature="Proper Documentation" />

					<FeatureCard image="/images/free.png" altText="image1" imgwidth={75} feature="Free Services" />

					<FeatureCard image="/images/classroom.png" altText="image1" imgwidth={75} feature="Well-equipped Classroom" />

					<FeatureCard image="/images/documentation.png" altText="image1" imgwidth={75} feature="Proper Documentation" />

					<FeatureCard image="/images/parking.png" altText="image1" imgwidth={75} feature="Free Parking" />
				</div>

				<div className="-mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
							<span className="mb-2 block text-lg font-semibold text-primary">Who are we</span>
							<h2 className="mb-4 text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px]">Our Recent News</h2>
							<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
						</div>
					</div>
				</div>
			</div>
			<div className="mb-24">
				<Vision />
			</div>
		</>
	);
};

export default About;
