// Banner.js

import React from "react";
const bgimage = "./public/images/headerbanner.png";

const Banner = ({ pageTitle, breadcrumbs, bgimage }) => {
	// const Banner = ({ pageTitle, breadcrumbs }) => {
	return (
		// <div className="bg-gradient-to-br from-teal-900 to-lime-600 bg-no-repeat bg-center bg-cover text-white py-16">
		<div className="bg-no-repeat bg-center bg-cover text-white py-16" style={{ backgroundImage: bgimage }}>
			<div className="container mx-auto">
				<h1 className="text-3xl font-semibold">{pageTitle}</h1>
				<div className="mt-2">
					{breadcrumbs.map((breadcrumb, index) => (
						<span key={index} className="text-gray-400">
							{breadcrumb} {index < breadcrumbs.length - 1 && " > "}
						</span>
					))}
				</div>
			</div>
		</div>
	);
};

export default Banner;
