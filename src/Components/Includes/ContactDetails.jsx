import React from "react";

const ContactDetails = () => {
	return (
		<div className="flex flex-col items-center justify-between bg-slate-100">
			<div className="flex flex-col text-xs md:flex-row gap-4 sm:gap-16 mt-12 sm:mt-16 text-black">
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
					<p>+977-9851000735</p>
				</div>

				<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90 mb-8">
					<i className="bi bi-envelope-at sm:text-5xl text-3xl mb-2 "></i>
					<h3 className="text-lg font-medium">Email</h3>
					<p>info@fate.edu.np</p>
				</div>
			</div>
			<div className="bg-white p-1 m-6 rounded-xl">
				<img src="/images/map.png" alt="FATE Location" className="h-96 object-cover rounded-lg" />
			</div>
		</div>
	);
};

export default ContactDetails;
