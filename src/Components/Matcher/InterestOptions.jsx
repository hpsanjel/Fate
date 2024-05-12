import React from "react";

const InterestOptions = ({ options, selectedOptions, handleSelection }) => {
	const handleSelectionInterests = (option) => {
		setSelectedInterests((prevSelected) => {
			if (prevSelected.includes(option)) {
				return prevSelected.filter((selected) => selected !== option);
			} else {
				return [...prevSelected, option];
			}
		});
	};

	return (
		<div className="flex flex-wrap">
			{options.map((option) => (
				<button key={option} name={option} type="button" className={`m-1 px-3 py-2 rounded-3xl ${selectedOptions.includes(option) ? "bg-green-500 text-white" : "bg-slate-200 text-slate-500"} text-sm hover:bg-blue-500 hover:text-white border border-blue-500`} onClick={() => handleSelection(option)}>
					{option}
				</button>
			))}
		</div>
	);
};

export default InterestOptions;
