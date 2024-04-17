import React from "react";
import Banner from "./Banner";
import { useState } from "react";
import SectionHeader from "./SectionHeader";
import regions_japan from "./DestinationData";
import StyledButton from "./Button";

const Destination = () => {
	const pageTitle = "Destination";
	const breadcrumbs = ["Home", "Destination"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="Gallery" firstheading={pageTitle} shortdesc="Nothing to write for now hehe" />

			<div className="container text-left gap-6 mt-4 mb-4 py-4 grid grid-cols-1 text-md md:grid-cols-2 lg:grid-cols-3 md:text-left md:gap-12">
				{regions_japan.map((region, id) => (
					<div key={id} className="p-6 mb-12 bg-white rounded shadow-md flex flex-col gap-y-4 h-fit md:flex-row space-x-4">
						<div>
							<img className="rounded-lg w-100% h-120" src={region.region_img} alt={region.region} />

							<h3 className="text-lg my-4">{region.region}</h3>
							<h4 className="leading-6 mb-4">{region.region_desc}</h4>

							<StyledButton className="w-full rounded-md">{`Study in ${region.region}`}</StyledButton>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Destination;
