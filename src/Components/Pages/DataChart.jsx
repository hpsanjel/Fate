import React from "react";
import { Line } from "react-chartjs-2";

const DataChart = ({ data }) => {
	const chartData = {
		labels: data.map((entry) => entry.Date),
		datasets: [
			{
				label: "Daily Cases",
				data: data.map((entry) => entry.Confirmed),
				fill: false,
				backgroundColor: "rgba(75, 192, 192, 0.6)",
				borderColor: "rgba(75, 192, 192, 1)",
			},
		],
	};

	return (
		<div className="p-4">
			<h2 className="text-xl mb-4">Daily Cases</h2>
			<Line data={chartData} />
		</div>
	);
};

export default DataChart;
