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

		// Validate input and update errors
		const validationError = validateInput(name, value); // Get a string error message
		setErrors({ ...errors, [name]: validationError }); // Store the error message as a string
	};

	const isValidEmail = (email) => {
		// Regular expression for email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validateInput = (name, value) => {
		let error = ""; // Use a string instead of an object

		switch (name) {
			case "name":
				if (!value.trim()) {
					error = "Name is required";
				}
				break;
			case "email":
				if (!value.trim()) {
					error = "Email is required";
				} else if (!isValidEmail(value)) {
					error = "Invalid email format";
				}
				break;
			case "subject":
				if (!value.trim()) {
					error = "Subject is required";
				}
				break;
			case "message":
				if (!value.trim()) {
					error = "Message is required";
				}
				break;
			default:
				break;
		}

		return error; // Return a string, not an object
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();

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

		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/createMessage`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(contactFormData),
			});

			if (response.ok) {
				toast.success("Message sent successfully!");
				setContactFormData({
					name: "",
					email: "",
					subject: "",
					message: "",
				});
				setErrors({});
			} else {
				toast.error("Failed to send message. Please try again.");
			}
		} catch (error) {
			console.error("Error submitting form:", error);
			toast.error("An error occurred while sending your message.");
		}
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
