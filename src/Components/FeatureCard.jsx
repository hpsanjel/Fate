import React from "react";

export const FeatureCard = ({ image, altimage, imgwidth, feature }) => {
	return (
		<div className="border-2 p-4 rounded-md  flex flex-col items-center">
			<img src={image} alt={altimage} width={imgwidth}></img>
			<p className="mt-3">{feature}</p>
		</div>
	);
};
