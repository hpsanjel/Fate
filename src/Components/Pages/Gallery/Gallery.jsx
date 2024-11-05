import React from "react";
import galleryData from "./GalleryData";
import Banner from "../../Includes/Banner";
import SectionHeader from "../../Includes/SectionHeader";

const Gallery = () => {
	const pageTitle = "Gallery";
	const breadcrumbs = ["Home", "Gallery"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="Sweet Memories" firstheading={pageTitle} shortdesc="We love to look back into our actions, events and successes" />

			<div className=" mb-12 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
				{galleryData.map((item, index) => (
					<div key={index} className="mb-8">
						<img src={item.largelink} alt={item.text} />
						{/* <p className="p-2 text-xs text-center">{item.desc}</p> */}
					</div>
				))}
			</div>
		</>
	);
};

export default Gallery;
