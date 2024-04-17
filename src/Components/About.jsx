import React from "react";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";
import Vision from "./Vision";
import Services from "./Services";

const About = () => {
	const pageTitle = "About Us";
	const breadcrumbs = ["Home", "About Us"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			{/* <Example /> */}
			<div className="container">
				<SectionHeader firstline="Know us Better" firstheading={pageTitle} shortdesc="Nothing to write for now hehe" />

				{/* <div className="mx-4 flex flex-wrap">
					<div className="w-full px-4">
						<div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
							<span className="mb-2 block text-lg font-semibold text-primary">Who are we</span>
							<h2 className="mb-4 text-3xl font-bold text-dark  md:text-[40px]">Our Recent News</h2>
							<p className="text-base text-body-color dark:text-dark-6">There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration in some form.</p>
						</div>
					</div>
				</div> */}
			</div>
			<div className="mb-24">
				<Vision />
			</div>
			<div className="container">
				<SectionHeader firstheading="Our Services" shortdesc="Nothing to write for now hehe" />
			</div>
			<div className="mb-24">
				<Services />
			</div>
		</>
	);
};

export default About;
