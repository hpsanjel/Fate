import React from "react";

const InfoCard = ({ title, image, altText, description }) => {
	return (
		<div className="border-2 bg-white rounded-md flex flex-col items-center gap-6 p-6">
			<strong>{title}</strong>
			<img src={image} alt={altText} width={75} />
			<p>{description}</p>
		</div>
	);
};

export default InfoCard;
