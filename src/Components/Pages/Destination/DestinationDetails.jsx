import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import SectionHeader from "../../Includes/SectionHeader";
import StudyDestinations from "./StudyDestination";

const DestinationDetails = () => {
	const { region } = useParams();
	const [regions, setRegions] = useState(region || "All Regions");
	const [filtereddestinations, setFilteredDestinations] = useState([]);

	useEffect(() => {
		if (region) {
			const defaultfilteredDestinations = StudyDestinations.filter((aregion) => aregion.region === region);
			setFilteredDestinations(defaultfilteredDestinations);
		} else {
			setFilteredDestinations(StudyDestinations);
		}
	}, [region]);

	const handleUniFilter = (e) => {
		const selected_region = e.target.name;
		setRegions(selected_region);
		if (selected_region === "All Regions") {
			setFilteredDestinations(StudyDestinations);
		} else {
			const filteredDestinations = StudyDestinations.filter((aregion) => aregion.region === selected_region);
			setFilteredDestinations(filteredDestinations);
		}
	};

	return (
		<>
			<SectionHeader firstline="Universities of your choice" firstheading={`Explore universities in ${regions}`} shortdesc="Get to know more about the choice of your universities and explore why Japan might be your best destination for study, work and live" />

			<div className="w-fit flex flex-wrap mx-auto rounded-md justify-center p-4 space-x-2 bg-white shadow-sm">
				<button type="button" name="All Regions" onClick={handleUniFilter} className={`rounded-lg text-fatePrimary px-4 py-1.5 my-2 ${regions === "All Regions" ? "bg-fatePrimary text-white" : "bg-fatePrimary/10 hover:bg-fatePrimary hover:text-white"}`}>
					All Regions
				</button>

				{[...new Set(StudyDestinations.map((studyDestination) => studyDestination.region))].map((regionName, index) => (
					<button key={index} type="button" name={regionName} onClick={handleUniFilter} className={`rounded-lg px-4 py-1.5 my-2 ${regions === regionName ? "bg-fatePrimary text-white" : "text-fatePrimary border-fatePrimary bg-fatePrimary/10 hover:bg-fatePrimary hover:text-white"}`}>
						{regionName}
					</button>
				))}
			</div>

			<div className="mx-auto flex flex-wrap justify-center items-center gap-6 p-20">
				{filtereddestinations.map((uni, index) => (
					<article key={index} className="flex flex-col w-[250px] h-[250px] rounded-xl bg-zinc-100 p-3 shadow-md">
						<div className="hover:transform hover:scale-105 duration-300 flex flex-col justify-center items-center">
							<img className="w-24 h-24 object-cover rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm8xvmz9S59P65963htH2EuK08jPnQnEXxAtJ_cPTbJA&s" alt="Uni Logo" />
							<div className="p-2">
								<h2 className="text-white-700 text-center h-12 my-3">{uni.University}</h2>
								<Link to={uni.Website} className="flex space-x-2 justify-center rounded-lg text-fatePrimary px-4 py-1.5 my-2 bg-fatePrimary/10 hover:bg-fatePrimary hover:text-white">
									<button className="text-sm text-center">Visit Website</button>
									<i className="bi bi-arrow-right"></i>
								</Link>
							</div>
						</div>
					</article>
				))}
			</div>
		</>
	);
};

export default DestinationDetails;
