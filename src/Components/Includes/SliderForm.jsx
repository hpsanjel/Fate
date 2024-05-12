import React from "react";
import { useState } from "react";
import { useRef } from "react";
import universities from "./universities.json";

const SliderForm = () => {
	const [searchValue, setSearchValue] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const searchUniRef = useRef(null);

	const fetchData = (value) => {
		try {
			const results = universities.filter((university) => {
				return value && university && university.University && university.University.toLowerCase().includes(value.toLowerCase());
			});

			setSearchResult(results);
		} catch (error) {
			console.error("Error reading or parsing data:", error);
		}
	};

	const handleChange = (value) => {
		setSearchValue(value);
		fetchData(value);
	};

	// const handleClickSearch = (event) => {
	// 	const selectedUni = event.target.dataset.value;
	// 	if (searchUniRef.current) {
	// 		searchUniRef.current.value = selectedUni;
	// 	}
	// };

	return (
		<div className="container">
			<div className="slideformcenter">
				<section className="slide-form p-1 w-full -mx-2 md:w-1/2">
					<h2 className="text-xl text-center tracking-wider">Explore Universities of Japan</h2>
					<form className="w-full text-center">
						{/* <label htmlFor="txt_search" className="text-center">
							Search by name, location or study level
						</label> */}
						<input type="text" ref={searchUniRef} className="search-input rounded-md" name="txt_search" id="txt_search" placeholder="Name, location or level of study" value={searchValue} onChange={(e) => handleChange(e.target.value)} />
					</form>
					<div id="results">
						<ul className=" overflow-y-scroll max-h-[200px]">
							{searchResult.length > 0 &&
								searchResult.map((result, index) => {
									return (
										<li key={index} className="search-results rounded-sm hover:bg-slate-200">
											<a href={result.Website} target="_blank" rel="noopener noreferrer" className="" data-value={result.name}>
												{result.University}
											</a>
										</li>
									);
								})}
						</ul>
					</div>
				</section>
			</div>
		</div>
	);
};

export default SliderForm;
