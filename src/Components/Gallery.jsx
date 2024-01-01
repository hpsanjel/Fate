import React from "react";
import galleryData from "./GalleryData";
import Banner from "./Banner";
import SectionHeader from "./SectionHeader";

const Gallery = () => {
	const pageTitle = "Gallery";
	const breadcrumbs = ["Home", "Gallery"];
	const bgimage = 'url("/images/classroom.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader first_heading="Gallery" />

			<div className="container mb-12 gap-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5">
				{galleryData.map((item, index) => (
					<div key={index}>
						<img src={item.link} alt={item.text} />
						{/* <p className="p-2 text-xs text-center">{item.desc}</p> */}
					</div>
				))}
			</div>
		</>
	);
};

export default Gallery;
