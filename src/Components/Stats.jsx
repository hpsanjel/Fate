import React from "react";

const Stats = () => {
	return (
		<div className="flex flex-col gap-2 md:gap-16 lg:gap-36 p-2 md:justify-between md:flex-row grid grid-cols-1 md:grid-cols-3">
			<div className=" flex h-full p-2 place-items-center gap-4 ">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-backpack-fill" viewBox="0 0 16 16">
					<path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z" />
					<path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
				</svg>
				<div className="border-l-2 border-teal-400 border-spacing-2 p-4 ">
					<p className="text-3xl font-bold">200K</p>
					<p>Students</p>
				</div>
			</div>
			<div className=" flex h-full p-2 place-items-center gap-4 ">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-person-workspace" viewBox="0 0 16 16">
					<path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
					<path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
				</svg>
				<div className="border-l-2 border-teal-400 border-spacing-2 p-4 ">
					<p className="text-3xl font-bold">50K</p>
					<p>Employees</p>
				</div>
			</div>
			<div className=" flex h-full p-2 place-items-center gap-4 ">
				<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-award-fill" viewBox="0 0 16 16">
					<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
					<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
				</svg>
				<div className="border-l-2 border-teal-400 border-spacing-2 p-4 ">
					<p className="text-3xl font-bold">204</p>
					<p>Awards</p>
				</div>
			</div>
		</div>
	);
};

export default Stats;
