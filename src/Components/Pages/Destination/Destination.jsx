import React from "react";
import Banner from "../../Includes/Banner";
import { useState } from "react";
import SectionHeader from "../../Includes/SectionHeader";
import StudyDestinations from "./StudyDestination";
import StyledButton from "../../Includes/PrimaryButton";
import { Link, useNavigate } from "react-router-dom";

const Destination = () => {
	const pageTitle = "Destination";
	const breadcrumbs = ["Home", "Destination"];
	const bgimage = 'url("/images/headerbanner.png")';

	const uniNavigate = useNavigate();

	const uniqueRegions = StudyDestinations.reduce((acc, curr) => {
		if (!acc.find((region) => region === curr.region)) {
			acc.push(curr.region);
		}
		return acc;
	}, []);

	uniqueRegions.map((region) => {
		const destination = StudyDestinations.find((dest) => dest.region === region);

		console.log("Region:", destination.region);
	});

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="Explore best universities" firstheading={pageTitle} shortdesc="You can choose the best universities of Japan as per your choice" />
			<div className="rounded-lg text-left grid grid-cols-1 text-md md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 md:text-left md:gap-8">
				{uniqueRegions.map((region, id) => {
					const dest = StudyDestinations.find((dest) => dest.region === region);
					return (
						<div key={id} className="my-4 bg-white rounded-lg shadow-md flex flex-col md:flex-row space-x-4">
							<div className="relative">
								<h3 className="absolute top-1 right-0 bg-fatePrimary text-white px-2 rounded-l-md text-md my-2 text-center">{dest.region}</h3>
								<img className=" md:grayscale-[40%] w-full h-120 md:hover:grayscale-0 md:hover:scale-[1..5] md:transition md:ease-in-out md:delay-150 rounded-t-md " src={dest.region_img} alt={dest.region} />

								<p className="text-sm leading-5 px-4 my-4 line-clamp-3">{dest.region_desc}</p>

								<Link to={`../destination-detail/${dest.region}`} className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-fatePrimary transition-all hover:bg-fatePrimary/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
									{`Universities in ${dest.region}`}
									<bi className="bi bi-arrow-right text-lg pl-1 group-hover:pl-2"></bi>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Destination;
