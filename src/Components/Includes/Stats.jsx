import React from "react";

const Stats = () => {
	return (
		<div className="mt-12">
			<div className="w-1/2 mx-auto grid gap-0 sm:grid-cols-2 md:grid-cols-4  shadow-lg text-white">
				<div className=" flex gap-4 h-full w-full p-4 place-items-center  justify-center bg-fatePrimary">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-backpack-fill " viewBox="0 0 16 16">
						<path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z" />
						<path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 1 0 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14A4 4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5" />
					</svg>
					<div>
						<p className="text-3xl font-bold">200K</p>
						<p>Students</p>
					</div>
				</div>
				<div className=" flex gap-4 h-full w-full p-4 place-items-center justify-center bg-white text-fatePrimary ">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person-workspace " viewBox="0 0 16 16">
						<path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
						<path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
					</svg>
					<div>
						<p className="text-3xl font-bold">50K</p>
						<p>Employees</p>
					</div>
				</div>
				<div className=" flex gap-4 h-full w-full p-4 place-items-center  justify-center bg-fatePrimary ">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-award-fill " viewBox="0 0 16 16">
						<path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
						<path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
					</svg>
					<div>
						<p className="text-3xl font-bold">204</p>
						<p>Awards</p>
					</div>
				</div>

				<div className=" flex gap-4 h-full w-full p-4 place-items-center  justify-center bg-white text-fatePrimary ">
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-buildings-fill" viewBox="0 0 16 16">
						<path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z" />
					</svg>
					<div>
						<p className="text-3xl font-bold">34</p>
						<p>Partnerships</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Stats;
