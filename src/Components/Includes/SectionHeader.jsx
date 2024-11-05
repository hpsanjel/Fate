import React from "react";

const SectionHeader = ({ firstline, firstheading, shortdesc }) => {
	return (
		<div>
			<div className="my-12 flex flex-wrap">
				<div className="w-full px-2">
					<div className="mx-auto max-w-lg text-center">
						<span className="mb-1 block text-sm">{firstline}</span>

						<h2 className="mb-4 text-3xl font-bold md:text-4xl text-fatePrimary">{firstheading}</h2>
						<p className="text-sm">{shortdesc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
