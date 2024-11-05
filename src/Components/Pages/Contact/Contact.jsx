import React from "react";
import Banner from "../../Includes/Banner";
// import { useState, useEffect } from "react";
// import SectionHeader from "../../Includes/SectionHeader";
import ContactForm from "../../Includes/ContactForm";

const Contact = () => {
	const pageTitle = "Contact";
	const breadcrumbs = ["Home", "Contact"];
	const bgimage = 'url("/images/heroimage.jpeg")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />

			<ContactForm />
		</>
	);
};

export default Contact;
