import React, { useState, useEffect } from "react";

function MatchTable({ userData }) {
	const [matchingData, setMatchingData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(5);

	useEffect(() => {
		const calculateMatchingData = () => {
			// Perform matching algorithm here
			// Use userData and setMatchingData to update state
		};

		calculateMatchingData();
	}, [userData]);

	// Calculate the index of the last item on the current page
	const indexOfLastItem = currentPage * itemsPerPage;

	// Calculate the index of the first item on the current page
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;

	// Get the current items to display on the current page
	const currentItems = matchingData.slice(indexOfFirstItem, indexOfLastItem);

	// Generate an array of page numbers based on the number of items and items per page
	const pageNumbers = [];
	for (let i = 1; i <= Math.ceil(matchingData.length / itemsPerPage); i++) {
		pageNumbers.push(i);
	}

	// Function to handle page change
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};

	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 text-green-800">Best Matches</h2>
			<table className=" max-h-screen table-auto w-full border-collapse border border-gray-800">
				{/* Table headers */}
				<thead>
					<tr className="bg-blue-500 text-white">
						<th className="border border-gray-800 px-4 py-2">SN</th>
						{/* Add more headers as needed */}
					</tr>
				</thead>
				{/* Table body */}
				<tbody>
					{/* Iterate over current items to display in the table */}
					{currentItems.map((match, index) => (
						<tr key={index}>
							<td className="border border-gray-800 px-4 py-2">{index + 1 + (currentPage - 1) * itemsPerPage}</td>
							{/* Render other table cells based on match data */}
						</tr>
					))}
				</tbody>
			</table>
			{/* Pagination buttons */}
			<ul className="flex gap-4">
				{pageNumbers.map((number) => (
					<li key={number} className="bg-blue-200 px-1 py-1 w-8 h-8 mt-4 text-center rounded-sm hover:bg-blue-300 cursor-pointer" onClick={() => handlePageChange(number)}>
						{number}
					</li>
				))}
			</ul>
		</div>
	);
}

export default MatchTable;
