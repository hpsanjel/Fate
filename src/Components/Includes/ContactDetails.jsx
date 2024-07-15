import React from "react";

const ContactDetails = () => {
	return (
		<div className="w-full pb-2 border-2 bg-fatePrimary/10 col-span-7 p-8 lg:p-12 lg:pb-4 shadow-sm">
			<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90 mb-8">
				<i className="bi bi-geo-alt sm:text-5xl text-3xl mb-2 "></i>
				<h3 className="text-lg font-medium">Address</h3>
				<p>Putalisadak, Kathmandu</p>
				<p>Bagmati, Nepal</p>
			</div>

			<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90 mb-8">
				<i className="bi bi-phone sm:text-5xl text-3xl mb-2 "></i>
				<h3 className="text-lg font-medium">Telephone</h3>
				<p>+977-1-4266704</p>
			</div>

			<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90 mb-8">
				<i className="bi bi-envelope-at sm:text-5xl text-3xl mb-2 "></i>
				<h3 className="text-lg font-medium">Email</h3>
				<p>info@fate.edu.np</p>
			</div>
		</div>
	);
};

export default ContactDetails;
