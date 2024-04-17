import React from "react";
import Banner from "./Banner";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
// import axios from "axios";
import { toast } from "react-toastify";
import StyledButton from "./Button";

const Contact = () => {
	const pageTitle = "Contact";
	const breadcrumbs = ["Home", "Contact"];
	const bgimage = 'url("/images/heroimage.jpeg")';

	const [formMessage, setFormMessage] = useState({});
	const [subEmail, setSubEmail] = useState({});
	// const [messages, setMessages] = useState([]);

	const handleContactForm = (e) => {
		setFormMessage({ ...formMessage, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const response = await fetch("http://localhost:8083/createMessage", {
			method: "POST",
			body: JSON.stringify(formMessage),
			headers: { "Content-Type": "application/json" },
		});

		if (!response.ok) {
			console.error(`Error: ${response.statusText}`);
			// Handle the error here, show an error toast, or other actions.
			return;
		}

		const resp = await response.json();
	};

	const handleSubscriber = async (e) => {
		e.preventDefault();
		const email = { email: subEmail };
		try {
			const response = await fetch("http://localhost:8083/addSubscriber", {
				method: "POST",
				body: JSON.stringify(email),
				headers: { "Content-Type": "application/json" },
			})
				.then((response) => {
					if (!response.ok) {
						throw new Error("Network response was not ok");
					}
					return response.json();
				})
				.then((data) => {
					if (data && data.email) {
						toast.success(`Hi, ${data.email}, Welcome to our family!`, {
							position: toast.POSITION.TOP_RIGHT,
							autoClose: 2000,
						});
					} else {
						// Handle cases where data or data.email is missing
						console.error("Data or email is missing");
					}
				})
				.catch((error) => {
					// Handle fetch errors
					console.error("Fetch error:", error);
					// Display a toast message for error handling if needed
					toast.error("Error fetching data", {
						position: toast.POSITION.TOP_RIGHT,
						autoClose: 2000,
					});
				});
		} catch (error) {
			console.error("Error:", error);
		}
	};

	// const getMessages = async () => {
	// 	try {
	// 		const response = await fetch("http://localhost:8083/getMessages", {
	// 			method: "GET",
	// 		});
	// 		const data = await response.json();
	// 		setMessages(data); // Assuming data retrieved is an array of messages
	// 	} catch (error) {
	// 		console.error("Error fetching messages:", error);
	// 	}
	// };

	// useEffect(() => {
	// 	getMessages();
	// }, []);

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="We want to hear from you" firstheading={pageTitle} shortdesc="Keep in touch Keep in touch Keep in touch Keep in touch Keep in touch Keep in touch Keep in touch " />

			<div className="contact-form-container">
				{/* <div>
					{messages.map((msg, index) => {
						return <h1 key={index}>{msg.name}</h1>;
					})}
				</div> */}
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="bg-white mt-6 p-6 pb-2 rounded shadow md:m-4 md:p-2 lg:m-8 lg:p-12">
						<form onSubmit={handleSubmit}>
							<div className="mb-4">
								<label className="block text-sm font-semibold" htmlFor="name">
									Name
								</label>
								<input onChange={handleContactForm} className=" w-6/7  border rounded py-2 px-3 text-gray-700 leading-tight " id="name" name="name" type="text" placeholder="Your Name" />
							</div>
							<div className="mb-4">
								<label className="block text-sm font-semibold" htmlFor="email">
									Email
								</label>
								<input onChange={handleContactForm} className=" w-6/7  border rounded py-2 px-3 text-gray-700 leading-tight " id="email" name="email" type="email" placeholder="Email" />
							</div>
							<div className="mb-4">
								<label className="block text-sm font-semibold" htmlFor="subject">
									Subject
								</label>
								<input onChange={handleContactForm} className=" w-6/7  border rounded py-2 px-3 text-gray-700 leading-tight " id="subject" name="subject" type="text" placeholder="Subject" />
							</div>
							<div className="mb-4">
								<label className="block text-sm font-semibold" htmlFor="message">
									Message
								</label>
								<textarea rows="10" onChange={handleContactForm} className="  border rounded py-2 px-3 text-gray-700 leading-tight " id="message" name="message" placeholder="Message" />
							</div>
							{/* Add more form fields here */}
							<div className="mb-6">
								<StyledButton type="submit" className="hover:bg-teal-900">
									Send Message
								</StyledButton>
							</div>
						</form>
					</div>

					{/* Contact Information */}
					<div className="bg-white m-6 p-6 pb-2 rounded shadow md:m-4 md:p-2 lg:m-8 lg:p-12">
						{/* Address */}
						<div className="mb-6">
							<h3 className="text-md font-extrabold">Address</h3>
							<p>Putalisadak, Kathmandu</p>
							<p>Bagmati, Nepal</p>
						</div>

						{/* Telephone */}
						<div className="mb-6">
							<h3 className="text-md font-extrabold">Telephone</h3>
							<p>+977-1-4266704</p>
						</div>

						<div className="mb-6">
							<h3 className="text-md font-extrabold">Email</h3>
							<p>info@fate.edu.np</p>
						</div>

						{/* Find us on */}
						<div className="mb-6">
							<h3 className="text-md font-extrabold">Find us on</h3>
							{/* Social media links */}
							<div className="flex flex-col social-media-links">
								<a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
									<i className="bi bi-facebook"> </i>facebook.com/fate
								</a>
								<a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
									<i className="bi bi-youtube"></i> youtube.com/fate
								</a>
								<a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
									<i className="bi bi-linkedin"></i> linkedin.com/fate
								</a>
								<a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
									<i className="bi bi-instagram"></i> instagram.com/fate
								</a>
							</div>
						</div>
						<form onSubmit={handleSubscriber}>
							<div className="flex flex-col w-full items-center mt-12 mb-6 gap-3 p-4 border-2 rounded-md bg-slate-100">
								<label htmlFor="subscriptionemail" className="text-md text-black">
									Get regular updates to your email{" "}
								</label>
								<input
									onChange={(e) => {
										setSubEmail(e.target.value);
									}}
									type="email"
									id="subscriptionemail"
									placeholder="Enter your email"
									className="p-3 rounded-sm"
								/>

								<StyledButton type="submit">Subscribe</StyledButton>
								<h3 className="text-sm">We do not send any junk emails!</h3>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
