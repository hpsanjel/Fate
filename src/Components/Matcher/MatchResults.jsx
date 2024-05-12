import React, { useState, useEffect } from "react";

const MatchResults = ({ matchingData, name, currentPage, itemsPerPage, handlePageChange }) => {
	// Pagination logic
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = matchingData.slice(indexOfFirstItem, indexOfLastItem);

	// Pagination numbers
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(matchingData.length / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="relative col-span-8 bg-blue-100/70 p-6">
			{matchingData.length == 0 ? (
				<div className="text-center">
					<img src="././public/images/group.jpeg"></img>
					<h3 className="text-3xl mt-12 font-semibold">Find your perfect study buddy</h3>
					<p className="mt-2 px-32 pt-4 pb-12 border-b-2 border-slate-400">You just need to enter your name and select at least 2 options from each category given in the left panel.</p>
					<h4 className="mt-4 px-32 text-sm">
						Developed by <span className="font-semibold">Hari Sanjel</span>
					</h4>
					<p className="text-sm">Oslomet University</p>
				</div>
			) : (
				""
			)}
			{matchingData.length > 0 && name && (
				<div className="">
					<div className="flex items-center justify-between">
						<h2 className="text-2xl font-bold mb-4 text-green-800">Best Matches</h2>
						<div className="absolute top-1 right-6">
							<ul className="flex gap-4">
								{pageNumbers.map((number) => (
									<li key={number} className="bg-blue-200 px-1 py-1 w-8 h-8 mt-4 text-center rounded-sm hover:bg-blue-300 cursor-pointer " onClick={() => handlePageChange(number)}>
										{number}
									</li>
								))}
							</ul>
						</div>
					</div>
					<table className=" max-h-screen table-auto w-full border-collapse border border-gray-800">
						<thead>
							<tr className="bg-blue-500 text-white">
								<th className="border border-gray-800 px-4 py-2">SN</th>
								<th className="border border-gray-800 px-4 py-2">Name</th>
								<th className="border border-gray-800 px-4 py-2">Common Values</th>
								<th className="border border-gray-800 px-4 py-2">Match Percentage</th>
								<th className="border border-gray-800 px-4 py-2">Matched Values Count</th>
							</tr>
						</thead>
						<tbody>
							{currentItems.map((match, index) => (
								<tr key={index} className={Object.keys(match.commonValues).length === 0 ? "bg-red-50" : "bg-green-200"}>
									<td className="border border-gray-800 px-4 py-2">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
									<td className="border border-gray-800 px-4 py-2">{match.name}</td>
									<td className="border border-gray-800 px-4 py-2">
										{Object.keys(match.commonValues).length > 0 ? (
											<ul>
												{Object.keys(match.commonValues).map((category, i) => (
													<li key={i}>
														{category}: {match.commonValues[category].join(", ")}
													</li>
												))}
											</ul>
										) : (
											"No common values"
										)}
									</td>
									<td className="border border-gray-800 px-4 py-2 text-3xl">{match.matchPercentage}%</td>
									<td className="border border-gray-800 px-4 py-2">{match.totalValuesCount}</td>
								</tr>
							))}
						</tbody>
					</table>
					<ul className="flex gap-4">
						{pageNumbers.map((number) => (
							<li key={number} className="bg-blue-200 px-1 py-1 w-8 h-8 mt-4 text-center rounded-sm hover:bg-blue-300 cursor-pointer " onClick={() => handlePageChange(number)}>
								{number}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default MatchResults;
