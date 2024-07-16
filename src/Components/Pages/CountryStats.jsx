import React, { useEffect, useState } from "react";
import axios from "axios";

const CountryStats = () => {
	const [countries, setCountries] = useState([]);
	const [selectedCountry, setSelectedCountry] = useState("");
	const [countryData, setCountryData] = useState({});

	useEffect(() => {
		axios
			.get("https://data.covid19india.org/v4/min/timeseries.min.json")
			.then((response) => {
				setCountries(response.data.Countries);
			})
			.catch((error) => console.log(error));
	}, []);

	const handleCountryChange = (event) => {
		const country = event.target.value;
		setSelectedCountry(country);
		const data = countries.find((c) => c.Slug === country);
		setCountryData(data);
	};

	return (
		<div className="p-4">
			<h2 className="text-xl mb-4">Country Statistics</h2>
			<select value={selectedCountry} onChange={handleCountryChange} className="mb-4 p-2 border">
				<option value="">Select a Country</option>
				{countries.map((country) => (
					<option key={country.Slug} value={country.Slug}>
						{country.Country}
					</option>
				))}
			</select>
			{selectedCountry && (
				<div className="grid grid-cols-3 gap-4">
					<div className="bg-white p-4 shadow rounded">
						<h3 className="text-lg">Total Cases</h3>
						<p>{countryData.AN}</p>
					</div>
					<div className="bg-white p-4 shadow rounded">
						<h3 className="text-lg">Total Recovered</h3>
						<p>{countryData.AN}</p>
					</div>
					<div className="bg-white p-4 shadow rounded">
						<h3 className="text-lg">Total Deaths</h3>
						<p>{countryData.AN}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default CountryStats;
