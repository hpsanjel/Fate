import React from "react";

export const FeatureCard = ({ image, altimage, imgwidth, feature }) => {
	return (
		<div className="p-4 flex flex-col bg-white items-center overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<img src={image} alt={altimage} width={imgwidth}></img>
			<p className="mt-3">{feature}</p>
		</div>
	);
};
