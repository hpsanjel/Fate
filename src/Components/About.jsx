import React from "react";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";
import Vision from "./Vision";

const About = () => {
	const pageTitle = "About Us";
	const breadcrumbs = ["Home", "About Us"];
	const bgimage = 'url("/images/classroom.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			{/* <Example /> */}
			<div className="container">
				<SectionHeader first_heading="Heading" />
				<div className="grid grid-cols-1 gap-6 p-4 mb-24 text-center md:grid-cols-3 md:gap-6 lg:grid-cols-4">
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/location.png" alt="image1" width={75}></img>
						<p className="mt-3">Centered Location</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/support.png" alt="image1" width={75}></img>
						<p className="mt-3">24/7 Support</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/free.png" alt="image1" width={75}></img>
						<p className="mt-3">Free Services</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/classroom.png" alt="image1" width={75}></img>
						<p className="mt-3">Well-equipped Classroom</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/documentation.png" alt="image1" width={75}></img>
						<p className="mt-3">Proper Documentation</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/parking.png" alt="image1" width={75}></img>
						<p className="mt-3">Free Parking</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/location.png" alt="image1" width={75}></img>
						<p className="mt-3">Centered Location</p>
					</div>
					<div className="border-2 p-4 rounded-md  flex flex-col items-center">
						<img src="/images/support.png" alt="image1" width={75}></img>
						<p className="mt-3">24/7 Support</p>
					</div>
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
