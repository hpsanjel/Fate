import React from "react";
import { useParams } from "react-router-dom";
import regions_japan from "../Components/DestinationData"; // Assuming correct path
import SectionHeader from "./SectionHeader";
const UniversityPage = () => {
	const { region } = useParams();

	const regionData = regions_japan.find((post) => post.region === region);

	// Handle the case where no matching region is found
	if (!regionData) {
		return <div>Region not found</div>;
	}

	return (
		<>
			<SectionHeader firstheading={regionData.region} />
			<div className="container mb-12">
				<p className="-my-8">{regionData.region_desc}</p>
				<img className="w-full object-cover my-12" src={regionData.region_img} alt={regionData.region} />
				{/* Add more elements to display other properties as needed */}
			</div>
		</>
	);
};

export default UniversityPage;
