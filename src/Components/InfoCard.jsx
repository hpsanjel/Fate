import React from "react";

const InfoCard = ({ title, image, altText, description }) => {
	return (
		<div className="border-2 bg-white rounded-md flex flex-col items-center gap-6 p-6 shadow-sm hover:shadow-md">
			<h1 className="text-black extra-bold text-xl">{title}</h1>
			<img src={image} alt={altText} width={75} />
			<p>{description}</p>
		</div>
	);
};

export default InfoCard;
