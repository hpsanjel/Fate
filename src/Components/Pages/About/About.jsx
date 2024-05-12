import React from "react";
import Banner from "../../Includes/Banner";
import SectionHeader from "../../Includes/SectionHeader";
import Vision from "../Services/Vision";
import Services from "../Services/Services";

const About = () => {
	const pageTitle = "About Us";
	const breadcrumbs = ["Home", "About Us"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			{/* <Example /> */}
			<div className="container">
				<SectionHeader firstline="Know us Better" firstheading={pageTitle} shortdesc="Nepal's bridge to top Japanese universities. Empowering dreams, one student at a time. " />
			</div>
			<div className="mb-24">
				<Vision />
			</div>

			<div className="mb-20">
				<SectionHeader firstline="What we do" firstheading="Our Facilities" shortdesc="Your Japan study dream starts here: expert guidance, top university placement, scholarship support. " />
				<Services />
			</div>
		</>
	);
};

export default About;
