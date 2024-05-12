import React, { useRef, useState } from "react";
import PrimaryButton from "../Includes/PrimaryButton";
import { ToastContainer, toast } from "react-toastify";

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
		<div className="container w-full md:w-1/2 grid md:grid-cols-12 p-8 md:p-20">
			<div className="w-full bg-white pb-2 border-2 border-fatePrimary/10 col-span-7 md:p-2  lg:p-12 lg:pb-4 shadow-sm">
				<form onSubmit={handleFormSubmit}>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-semibold" htmlFor="name">
							Name
						</label>
						<input onChange={handleFormInputChange} className={`${errors.name ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="name" name="name" value={contactFormData.name} type="text" placeholder="Your Name" />
						{errors.name && <span className="text-red-500 text-xs">{errors.name}</span>}
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-semibold" htmlFor="email">
							Email
						</label>
						<input onChange={handleFormInputChange} className={`${errors.email ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="email" name="email" value={contactFormData.email} type="email" placeholder="Email" />
						{errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-semibold" htmlFor="subject">
							Subject
						</label>
						<input onChange={handleFormInputChange} className={`${errors.subject ? "w-full rounded py-2 px-3 text-gray-700 leading-tight border border-red-500 bg-red-50" : "w-full border rounded py-2 px-3 text-gray-700 leading-tight"}`} id="subject" name="subject" value={contactFormData.subject} type="text" placeholder="Subject" />
						{errors.subject && <span className="text-red-500 text-xs">{errors.subject}</span>}
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-semibold" htmlFor="message">
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

			<div className="w-full md:w-2/3 grid grid-cols-1 col-span-5 bg-fatePrimary/10  text-sm px-6 py-12 shadow-sm">
				<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
					<i className="bi bi-geo-alt sm:text-5xl text-3xl mb-2 "></i>
					<h3 className="text-lg font-medium">Address</h3>
					<p>Putalisadak, Kathmandu</p>
					<p>Bagmati, Nepal</p>
				</div>

				<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
					<i className="bi bi-phone sm:text-5xl text-3xl mb-2 "></i>
					<h3 className="text-lg font-medium">Telephone</h3>
					<p>+977-1-4266704</p>
				</div>

				<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
					<i className="bi bi-envelope-at sm:text-5xl text-3xl mb-2 "></i>
					<h3 className="text-lg font-medium">Email</h3>
					<p>info@fate.edu.np</p>
				</div>
			</div>
		</div>
	);
};

export default ContactForm;
