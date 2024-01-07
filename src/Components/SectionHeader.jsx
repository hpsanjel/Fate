import React from "react";

const SectionHeader = ({ firstline, firstheading, shortdesc }) => {
	return (
		<div>
			<div className="mt-24 flex flex-wrap">
				<div className="w-full px-4">
					<div className="mx-auto mb-[40px] max-w-[510px] text-center lg:mb-10">
						<span className="mb-2 block text-lg font-semibold text-teal">{firstline}</span>

						<h2 className="mb-2 text-3xl font-bold sm:text-4xl md:text-[40px]">{firstheading} </h2>
						<p className="text-base text-body-color dark:text-dark-6">{shortdesc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
