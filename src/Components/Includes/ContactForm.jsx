import React, { useRef, useState } from "react";
import PrimaryButton from "../Includes/PrimaryButton";
import { ToastContainer, toast } from "react-toastify";
import ContactDetails from "./ContactDetails";
import SectionHeader from "../Includes/SectionHeader";

const ContactForm = () => {
	const [contactFormData, setContactFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const handleFormInputChange = (e) => {
		const { name, value } = e.target;
		setContactFormData({ ...contactFormData, [name]: value });

		const validationErrors = validateInput(name, value);
		setErrors({ ...errors, [name]: validationErrors });
	};

	const isValidEmail = (email) => {
		// Regular expression for email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		const validateInput = (name, value) => {
			const errors = {};

			// Perform validation for each input field
			switch (name) {
				case "name":
					if (!value.trim()) {
						errors[name] = "Name is required";
					}
					break;
				case "email":
					if (!value.trim()) {
						errors[name] = "Email is required";
					} else if (!isValidEmail(value)) {
						errors[name] = "Invalid email format";
					}
					break;
				case "message":
					if (!value.trim()) {
						errors[name] = "Message is required";
					}
					break;
				case "subject":
					if (!value.trim()) {
						errors[name] = "Subject is required";
					}
					break;
				default:
					break;
			}

			return errors;
		};
		const formErrors = {};
		Object.keys(contactFormData).forEach((key) => {
			const validationErrors = validateInput(key, contactFormData[key]);
			if (Object.keys(validationErrors).length > 0) {
				formErrors[key] = validationErrors[key];
			}
		});

		// If there are validation errors, set them in state
		if (Object.keys(formErrors).length > 0) {
			setErrors(formErrors);
			return;
		}

		// If no validation errors, proceed with form submission
		toast.success("Form submission successful");
		console.log("Form data:", contactFormData);
	};

	return (
		<>
			<SectionHeader firstline="Stay Updated" firstheading="Keep in touch" shortdesc="Get to know more why Japan might be your best destination for study, work and live" />
			<div className=" grid md:grid-cols-12 pb-8  sm:pb-20">
				<div className="bg-fatePrimary/10 pb-2 ml-8 grid sm:col-span-4 p-8 lg:p-12 lg:pb-4">
					<form onSubmit={handleFormSubmit} className="text-black">
						<div className="mb-6">
							<label className="block mb-2 text-md" htmlFor="name">
								Name
							</label>
							<input onChange={handleFormInputChange} className={`${errors.name ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="name" name="name" value={contactFormData.name} type="text" placeholder="Your Name" />
							{errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
						</div>
						<div className="mb-6">
							<label className="block mb-2 text-md" htmlFor="email">
								Email
							</label>
							<input onChange={handleFormInputChange} className={`${errors.email ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="email" name="email" value={contactFormData.email} type="email" placeholder="Email" />
							{errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
						</div>
						<div className="mb-6">
							<label className="block mb-2 text-md" htmlFor="subject">
								Subject
							</label>
							<input onChange={handleFormInputChange} className={`${errors.subject ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="subject" name="subject" value={contactFormData.subject} type="text" placeholder="Subject" />
							{errors.subject && <span className="text-red-500 text-xs">{errors.subject}</span>}
						</div>
						<div className="mb-6">
							<label className="block mb-2 text-md" htmlFor="message">
								Message
							</label>
							<textarea onChange={handleFormInputChange} rows="10" className={`${errors.message ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="message" name="message" value={contactFormData.message} placeholder="Message" />
							{errors.message && <span className="text-red-500 text-xs">{errors.message}</span>}
						</div>
						{/* Add more form fields here */}
						<div className="mb-6">
							<PrimaryButton>Send Message</PrimaryButton>
						</div>
					</form>
				</div>

				<div className="grid sm:col-span-8 mx-8">
					<ContactDetails />
				</div>
			</div>
		</>
	);
};

export default ContactForm;
