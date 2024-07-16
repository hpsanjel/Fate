import React, { useEffect, useState } from "react";
import axios from "axios";

const GlobalStats = () => {
	const [globalData, setGlobalData] = useState({});

	useEffect(() => {
		axios
			.get("https://data.covid19india.org/v4/min/timeseries.min.json")
			.then((response) => {
				setGlobalData(response.data.Global);
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="p-4">
			<h2 className="text-xl mb-4">Global Statistics</h2>
			<div className="grid grid-cols-3 gap-4">
				<div className="bg-white p-4 shadow rounded">
					<h3 className="text-lg">Total Cases</h3>
					<p>{globalData.AN}</p>
				</div>
				<div className="bg-white p-4 shadow rounded">
					<h3 className="text-lg">Total Recovered</h3>
					<p>{globalData.AN}</p>
				</div>
				<div className="bg-white p-4 shadow rounded">
					<h3 className="text-lg">Total Deaths</h3>
					<p>{globalData.AN}</p>
				</div>
			</div>
		</div>
	);
};

export default GlobalStats;
