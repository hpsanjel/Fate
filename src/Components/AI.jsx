import React, { useEffect } from "react";
import { useState } from "react";

export const AI = () => {
	const [keyword, setKeyword] = useState("");

	const handleKeyword = (e) => {
		setKeyword(e.target.value);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const prompt = { prompt: `New` };
		try {
			const response = await fetch("http://localhost:8083/generate-essay", {
				method: "POST",
				body: JSON.stringify(prompt),
			});
			const data = await response.json();
			console.log(data.status);
			console.log(data);
			console.log(response.status);
		} catch (error) {
			console.error("Error:", error);
		}
	};
	return (
		<div>
			<form onSubmit={handleSubmit} className="flex flex-col w-full items-center mt-12 gap-3 p-4 border-2 rounded-md bg-slate-100">
				<label htmlFor="email" className="text-md text-black">
					Generate an Essay
				</label>
				<input
					onChange={handleKeyword}
					// onChange={(e) => {
					// 	console.log(e.target.value);
					// }}
					type="text"
					id="topic"
					name="topic"
					placeholder="Enter topic for an essay"
					className="text-black mx-3"
				/>

				<button className="inline-block rounded-md border border-transparent bg-teal-900 px-3 py-3 text-center font-medium text-white hover:bg-teal-950" type="submit">
					Generate Essay
				</button>
			</form>
		</div>
	);
};

export default AI;
