import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const ContactDetails = () => {
	const contactItems = [
		{
			icon: <MapPin className="w-8 h-8 mb-4" />,
			title: "Address",
			details: ["Putalisadak, Kathmandu", "Bagmati, Nepal"],
		},
		{
			icon: <Phone className="w-8 h-8 mb-4" />,
			title: "Telephone",
			details: ["+977-1-4266704", "+977-9851000735"],
		},
		{
			icon: <Mail className="w-8 h-8 mb-4" />,
			title: "Email",
			details: ["info@fate.edu.np"],
		},
	];

	return (
		<div className="bg-gradient-to-b from-slate-50 to-slate-100 py-16">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Contact Us</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
					{contactItems.map((item, index) => (
						<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
							<div className="text-blue-600">{item.icon}</div>
							<h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
							{item.details.map((detail, detailIndex) => (
								<p key={detailIndex} className="text-gray-600 text-center">
									{detail}
								</p>
							))}
						</motion.div>
					))}
				</div>
				<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white p-4 rounded-xl shadow-lg">
					<img src="/images/map.png" alt="FATE Location" className="w-full h-[400px] object-cover rounded-lg" />
				</motion.div>
			</div>
		</div>
	);
};

export default ContactDetails;
