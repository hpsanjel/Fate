import React from "react";

const SectionHeader = ({ firstline, firstheading, shortdesc }) => {
	return (
		<div>
			<div className="mt-16 flex flex-wrap">
				<div className="w-full px-2">
					<div className="mx-auto mb-[48px] max-w-[510px] text-center lg:mb-12">
						<span className="mb-2 block text-lg text-teal">{firstline}</span>

						<h2 className=" text-3xl font-bold md:text-5xl">{firstheading} </h2>
						<p>{shortdesc}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SectionHeader;
