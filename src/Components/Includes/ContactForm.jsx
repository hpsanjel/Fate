import React, { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MapPin, Phone, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";
import InteractiveMap from "./InteractiveMaps";

const ContactPage = () => {
	const [contactFormData, setContactFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const googleMapsApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

	const handleFormInputChange = (e) => {
		const { name, value } = e.target;
		setContactFormData({ ...contactFormData, [name]: value });
		const validationError = validateInput(name, value);
		setErrors({ ...errors, [name]: validationError });
	};

	const isValidEmail = (email) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validateInput = (name, value) => {
		let error = "";
		switch (name) {
			case "name":
				if (!value.trim()) error = "Name is required";
				break;
			case "email":
				if (!value.trim()) error = "Email is required";
				else if (!isValidEmail(value)) error = "Invalid email format";
				break;
			case "subject":
				if (!value.trim()) error = "Subject is required";
				break;
			case "message":
				if (!value.trim()) error = "Message is required";
				break;
			default:
				break;
		}
		return error;
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

		const formErrors = {};
		Object.keys(contactFormData).forEach((key) => {
			const validationError = validateInput(key, contactFormData[key]);
			if (validationError) {
				formErrors[key] = validationError;
			}
		});

		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		try {
			const response = await fetch(`${process.env.VITE_APP_API_URL}/createMessage`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactFormData),
			});

			if (response.ok) {
				toast.success("Message sent successfully!");
				setContactFormData({ name: "", email: "", subject: "", message: "" });
				setErrors({});
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("An error occurred while sending your message.");
		}
	};

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
		<div className="">
			<div className=" mx-auto p-12">
				<motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-3xl text-center text-gray-800 mb-12">
					<SectionHeader firstline="Stay Updated" firstheading="Keep in touch" shortdesc="Get to know more why Japan might be your best destination for study, work and live" />
				</motion.div>

				<div className="grid md:grid-cols-2 gap-8">
					<motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-white rounded-lg shadow-md p-8">
						<h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Us</h3>
						<form onSubmit={handleFormSubmit} className="space-y-6">
							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
									Name
								</label>
								<input type="text" id="name" name="name" value={contactFormData.name} onChange={handleFormInputChange} className={`w-full px-3 py-2 border rounded-md ${errors.name ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Your Name" />
								{errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
							</div>
							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email
								</label>
								<input type="email" id="email" name="email" value={contactFormData.email} onChange={handleFormInputChange} className={`w-full px-3 py-2 border rounded-md ${errors.email ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Your Email" />
								{errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
							</div>
							<div>
								<label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
									Subject
								</label>
								<input type="text" id="subject" name="subject" value={contactFormData.subject} onChange={handleFormInputChange} className={`w-full px-3 py-2 border rounded-md ${errors.subject ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Subject" />
								{errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject}</p>}
							</div>
							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
									Message
								</label>
								<textarea id="message" name="message" rows="5" value={contactFormData.message} onChange={handleFormInputChange} className={`w-full px-3 py-2 border rounded-md ${errors.message ? "border-red-500" : "border-gray-300"} focus:outline-none focus:ring-2 focus:ring-blue-500`} placeholder="Your Message"></textarea>
								{errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
							</div>
							<button type="submit" className="w-full bg-fatePrimary text-white px-4 py-2 rounded-md font-semibold hover:bg-fatePrimary/80 transition-colors duration-300">
								Send Message
							</button>
						</form>
					</motion.div>

					<motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col  justify-between">
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
							{contactItems.map((item, index) => (
								<motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.1 }} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
									<div className="text-fatePrimary">{item.icon}</div>
									<h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
									{item.details.map((detail, detailIndex) => (
										<p key={detailIndex} className="text-gray-600 text-center">
											{detail}
										</p>
									))}
								</motion.div>
							))}
						</div>
						<motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }} className="bg-white mt-8 rounded-xl shadow-md">
							{/* <img src="/images/map.png" alt="FATE Location" className="w-full h-[370px] object-cover rounded-lg" /> */}
							<InteractiveMap apiKey={googleMapsApiKey} />
						</motion.div>
					</motion.div>
				</div>
			</div>
			<ToastContainer position="bottom-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
		</div>
	);
};

export default ContactPage;
