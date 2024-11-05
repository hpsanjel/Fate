import React from "react";

const InfoCard = ({ title, image, altText, description }) => {
	return (
		<div className=" bg-white flex flex-col items-center gap-6 p-6 divide-y divide-solid overflow-hidden rounded-lg shadow transition hover:shadow-lg">
			<div className="flex flex-col md:flex-row gap-4 items-center md:items-center">
				<img src={image} alt={altText} width={56} className="bg-slate-100 p-1 rounded-full" />
				<h1 className="text-black extra-bold text-xl">{title}</h1>
			</div>
			<p className="pt-4">{description}</p>
		</div>
	);
};

export default InfoCard;
