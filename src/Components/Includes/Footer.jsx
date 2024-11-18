import React, { useState } from "react";
import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import PrimaryButton from "./PrimaryButton";
import { ToastContainer, toast } from "react-toastify";
import { useModal } from "./ModalContext";

const Footer = () => {
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isError, setIsError] = useState(false);
	const { openModal, closeModal } = useModal();

	const handleSubscribe = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.VITE_APP_API_URL}/addSubscriber`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email }),
			});

			const data = await response.json();

			if (response.ok) {
				// Success response
				setMessage(data.message);
				setIsError(false);
				toast.success(data.message);
				setEmail(""); // Clear input field
			} else {
				// Error response
				setMessage(data.message);
				toast.error(data.message);
				setIsError(true);
			}
		} catch (error) {
			setMessage("An unexpected error occurred. Please try again.");
			setIsError(true);
		}
	};

	return (
		<>
			<ToastContainer />
			{/* <img classNameName="h-1/4 object-cover" src="https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/thumbnails/image/banner_mapsHD.png" alt="kart"></img> */}
			<footer className="relative bg-gradient-to-t from-black to-fatePrimary text-white/80">
				<div className=" mx-auto pb-8 pt-16 px-8">
					<div className="mx-auto max-w-xl">
						<strong className="block text-center text-xl font-bold  sm:text-3xl">
							Want us to email you with the <br /> latest admission offers?
						</strong>

						<form onSubmit={handleSubscribe} className="mt-6 w-[90%] mx-auto">
							<div className="relative max-w-lg">
								<label className="sr-only" htmlFor="email">
									Email
								</label>
								<input className="w-full rounded-full border-gray-200 bg-gray-100 text-black p-4 pe-32 text-md font-medium" id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="hari_sanjel@gmail.com" />
								<PrimaryButton type="submit" className="absolute end-2.5 top-1/2 -translate-y-1/2">
									Subscribe
								</PrimaryButton>{" "}
								{/* <button className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-fatePrimary px-5 py-3 text-md font-medium text-white transition hover:bg-teal-700">Subscribe</button> */}
							</div>
						</form>
					</div>

					<div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-32">
						<div className="flex  flex-col items-center mx-auto max-w-sm lg:max-w-none">
							<p className="my-4 text-center  lg:text-left lg:text-lg">Fate International Japanese School Private Limited (FIJS) is the only institute which provides quality Japanese Language Teaching Facilities.</p>

							<SocialMediaLinks />
						</div>

						<div className="grid grid-cols-1 gap-8 text-center lg:grid-cols-3 lg:text-left">
							<div>
								<strong className="font-medium text-white"> Services </strong>

								<ul className="mt-6 space-y-1">
									{/* <li>
										<Link className="transition text-white/80 hover:text-white" to="#">
											{" "}
											Counselling{" "}
										</Link>
									</li> */}

									<li>
										<Link className="text-white/80 transition hover:text-white" to="./language-classes">
											Language Classes
										</Link>
									</li>

									<li>
										<Link className="text-white/80 transition hover:text-white" to="#">
											Student Visa
										</Link>
									</li>

									{/* <li>
										<Link className="text-white/80 transition hover:text-white" to="#">
											Work Visa
										</Link>
									</li> */}
								</ul>
							</div>

							<div>
								<strong className="font-medium text-white"> About </strong>

								<ul className="mt-6 space-y-1">
									<li>
										<Link className="text-white/80 transition hover:text-white" to="./about">
											{" "}
											About Us{" "}
										</Link>
									</li>
									<li>
										<Link className="text-white/80 transition hover:text-white" to="./team">
											{" "}
											Our Team{" "}
										</Link>
									</li>

									<li>
										<Link className="text-white/80 transition hover:text-white" to="./career">
											{" "}
											Careers{" "}
										</Link>
									</li>

									<li>
										<Link className="text-white/80 transition hover:text-white" to="./blog">
											{" "}
											Blogs{" "}
										</Link>
									</li>
								</ul>
							</div>

							<div>
								<strong className="font-medium text-white"> Support </strong>

								<ul className="mt-6 space-y-1">
									<li>
										<Link className="text-white/80 transition hover:text-white" to="./faqs">
											{" "}
											FAQs{" "}
										</Link>
									</li>

									<li>
										<Link className="text-white/80 transition hover:text-white" to="./contact">
											{" "}
											Message Us{" "}
										</Link>
									</li>

									<li>
										<button onClick={openModal} className="mt-1">
											Request Callback
										</button>
									</li>
								</ul>
							</div>
						</div>
					</div>

					<div className="mt-16 border-t border-gray-100 pt-8">
						<p className="text-center text-xs/relaxed text-white/60">
							© Company 2024. All rights reserved.
							<br />
							Developed by &nbsp;
							<Link to="#" className="text-white/60 underline transition hover:text-gray-700/75">
								Hari Sanjel
							</Link>
						</p>
					</div>
				</div>
				<button
					className="absolute bottom-5 right-5 sm:top-10 sm:right-10"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<span className="sr-only">Back to top</span>

					<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" className="block text-fateSecondaryLight hover:text-fateSecondaryDark bi bi-arrow-up-circle-fill" viewBox="0 0 16 16">
						<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
					</svg>
				</button>
			</footer>
		</>
	);
};

export default Footer;
