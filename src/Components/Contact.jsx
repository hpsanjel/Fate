import React from "react";
import Banner from "./Banner";
import Map from "./Map";
import { useState, useEffect } from "react";
import SectionHeader from "./SectionHeader";
// import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
	const pageTitle = "Contact";
	const breadcrumbs = ["Home", "Contact"];
	const bgimage = 'url("/images/map.png")';

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
		const resp = await response.json();
		toast.success(`Hi, ${resp.name}, We just received your message!`, {
			position: toast.POSITION.TOP_RIGHT,
			autoClose: 2000,
		});
	};

	const handleSubscriber = async (e) => {
		e.preventDefault();
		const email = { email: subEmail }; // Construct an object with 'email' key
		try {
			const response = await fetch("http://localhost:8083/addSubscriber", {
				method: "POST",
				body: JSON.stringify(email),
				headers: { "Content-Type": "application/json" },
			});
			const data = await response.json();
			toast.success(`Hi, ${data.email}, Welcome to our family!`, {
				position: toast.POSITION.TOP_RIGHT,
				autoClose: 2000,
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
			<SectionHeader first_heading="Contact" />

			<div className="contact-form-container p-4">
				{/* <div>
					{messages.map((msg, index) => {
						return <h1 key={index}>{msg.name}</h1>;
					})}
				</div> */}
				<div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-white m-2 p-4 pb-2 rounded shadow md:m-2 md:p-16">
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
								<button className="inline-block rounded-md border border-transparent bg-teal-900 px-3 py-3 text-center font-medium text-white hover:bg-teal-950" type="submit">
									Send Message
								</button>
							</div>
						</form>
					</div>

					{/* Contact Information */}
					<div className="bg-white m-4 p-12 md:p-16 rounded shadow">
						{/* Address */}
						<div className="mb-6">
							<h3 className="text-sm font-semibold">Address</h3>
							<p>Putalisadak, Kathmandu</p>
							<p>Bagmati, Nepal</p>
						</div>

						{/* Telephone */}
						<div className="mb-6">
							<h3 className="text-sm font-semibold">Telephone</h3>
							<p>+977-1-4266704</p>
						</div>

						<div className="mb-6">
							<h3 className="text-sm font-semibold">Email</h3>
							<p>info@fate.edu.np</p>
						</div>

						{/* Find us on */}
						<div className="mb-6">
							<h3 className="text-sm font-semibold">Find us on</h3>
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
						<form onSubmit={handleSubscriber} className="flex flex-col w-full items-center mt-12 gap-3 p-4 border-2 rounded-md bg-slate-100">
							<label htmlFor="email" className="text-md text-black">
								Stay in Touch
							</label>
							<input
								onChange={(e) => {
									setSubEmail(e.target.value);
								}}
								type="email"
								id="email"
								placeholder="Enter your email"
								className="text-black mx-3"
							/>

							<button className="inline-block rounded-md border border-transparent bg-teal-900 px-3 py-3 text-center font-medium text-white hover:bg-teal-950" type="submit">
								Subscribe
							</button>
						</form>
					</div>
				</div>
			</div>
			<Map />
		</>
	);
};

export default Contact;