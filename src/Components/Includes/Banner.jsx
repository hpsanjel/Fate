// Banner.js

import React from "react";

const Banner = ({ pageTitle, breadcrumbs, bgimage }) => {
	return (
		<>
			<div className="bg-gradient-to-r from-fatePrimary to-slate-600 bg-no-repeat bg-center bg-cover text-white">
				<div className="bg-no-repeat bg-center bg-cover text-white py-16 w-full opacity-80" style={{ backgroundImage: bgimage }}>
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
			</div>
		</>
	);
};

export default Banner;
