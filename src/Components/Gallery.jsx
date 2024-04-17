import React from "react";
import galleryData from "./GalleryData";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";

const Gallery = () => {
	const pageTitle = "Gallery";
	const breadcrumbs = ["Home", "Gallery"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="testimonials" firstheading={pageTitle} shortdesc="Nothing to write for now hehe" />

			<div className="container mb-12 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
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
