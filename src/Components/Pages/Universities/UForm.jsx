import React, { useState } from "react";
import { StudyDestinations } from "./StudyDestinations";

const UForm = () => {
	const [searchInput, setSearchInput] = useState("");
	const [hints, setHints] = useState([]);

	const handleInputChange = (e) => {
		const inputValue = e.target.value;
		setSearchInput(inputValue);

		const filteredData = StudyDestinations.filter((uni) => uni.name.toLowerCase().includes(inputValue.toLowerCase()) || uni.location.toLowerCase().includes(inputValue.toLowerCase()) || uni.level.toLowerCase().includes(inputValue.toLowerCase()));

		setHints(filteredData);
	};

	return (
		<div className="max-w-lg mx-auto mt-8">
			<h2 className="text-xl font-bold mb-4">University Search</h2>
			<form>
				<div className="mb-4">
					<label htmlFor="university">Name of the University:</label>
					<input type="text" id="university" value={searchInput} onChange={handleInputChange} className="border rounded px-2 py-1 w-full" />
				</div>
			</form>

			<div>
				<h3 className="text-lg font-semibold mt-4">Hints:</h3>
				<ul>
					{hints.map((hint, index) => (
						<li key={index}>
							{hint.name} - {hint.location} - {hint.level}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default UForm;
