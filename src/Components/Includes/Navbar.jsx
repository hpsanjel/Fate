import { useState, useRef, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";
import PrimaryButton from "./PrimaryButton";
import { useModal } from "./ModalContext";

const Navbar = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	// const [isModalOpen, setIsModalOpen] = useState(false);
	const navRef = useRef();
	const { openModal, closeModal, isModalOpen } = useModal();

	const showNavBar = () => {
		navRef.current.classList.toggle("responsive_nav");
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<>
			<div className="flex items-center justify-center bg-fatePrimary text-white py-3 top-0 px-8 md:px-0">
				<div className="flex justify-between">
					<div className="flex place-items-center text-sm text-white">
						<i className="bi bi-phone"></i>
						<p className="mr-4">9851000735</p>
						<i className="bi bi-envelope mr-1"></i>
						<p className="">info@fate.edu.np</p>
					</div>
					<SocialMediaLinks />
				</div>
			</div>
			<header className="bg-white border-b-2 border-fatePrimary shadow-lg">
				<div className=" flex items-center justify-between">
					<div className="flex items-center px-8 md:px-0">
						<div className="logo">
							<Link to="/">
								<img src="/images/Fate-Logo.png" alt="Fate Logo" />
							</Link>
						</div>
						<nav ref={navRef} className="">
							<NavLink className="text-black hover:text-slate-600" to="/" onClick={showNavBar}>
								Home
							</NavLink>
							<NavLink className="text-black hover:text-slate-600" to="/about" onClick={showNavBar}>
								About
							</NavLink>
							<NavLink className="text-black hover:text-slate-600" to="/destination" onClick={showNavBar}>
								Destination
							</NavLink>
							<NavLink className="text-black hover:text-slate-600" to="/blog" onClick={showNavBar}>
								Blog
							</NavLink>
							{/* <NavLink className="hover:text-slate-600" to="/gallery" onClick={showNavBar}>
							Gallery
						</NavLink>
						<NavLink className="hover:text-slate-600" to="/testimonial" onClick={showNavBar}>
							Testimonials
						</NavLink> */}
							<NavLink className="text-black hover:text-slate-600" to="/contact" onClick={showNavBar}>
								Contact
							</NavLink>

							{/* <button className="nav_btn nav_close_btn text-md" onClick={showNavBar}>
							<i className="bi bi-x-square-fill"></i>
						</button> */}
						</nav>
					</div>
					<div className="flex">
						<PrimaryButton onClick={openModal} className="text-white font-medium">
							{/* <PrimaryButton onClick={openModal} className="absolute -right-0 -top-96 md:-top-1 md:right-8 "> */}
							Request Callback
						</PrimaryButton>
						<button className="nav_btn absolute top-0 right-2" onClick={showNavBar}>
							{isMenuOpen ? <i className="bi bi-x"></i> : <i className="bi bi-list"></i>}
						</button>
					</div>
				</div>
			</header>
			{/* {isModalOpen && <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-40" onClick={closeModal}></div>} */}

			{isModalOpen ? (
				<>
					<div className="fixed top-0 left-0 w-full h-full bg-gray-900/40 transition-all z-40 duration-300" onClick={closeModal}></div>
					<div id="callback-modal" tabIndex="-1" aria-hidden="true" className="fixed top-5 z-50 flex justify-center items-center w-full h-full ">
						<div className="relative p-4 w-full max-w-md max-h-full">
							<div className="relative bg-white rounded-lg shadow dark:bg-black">
								<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">Request Callback</h3>
									<button type="button" onClick={closeModal} className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
										<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
											<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
										</svg>
										<span className="sr-only">Close modal</span>
									</button>
								</div>
								<div className="p-4 md:p-5">
									<form className="space-y-4" action="#">
										<div>
											<label htmlFor="stuname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Your name
											</label>
											<input type="text" name="stuname" id="stuname" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="contact@fate.edu.np" required />
										</div>
										<div>
											<label htmlFor="stuemail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
												Your email
											</label>
											<input type="email" name="stuemail" id="stuemail" className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black" placeholder="contact@fate.edu.np" required />
										</div>
										<div>
											<label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">
												Your mobile number
											</label>
											<input
												type="number"
												name="mobile"
												id="mobile"
												placeholder="98********"
												onInput={(e) => {
													e.target.value = Math.max(0, parseInt(e.target.value)).toString().slice(0, 10);
												}}
												className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:outline-none block w-full p-2.5 dark:bg-gray-300 dark:border-gray-500 dark:placeholder-gray-400 dark:text-black"
												required
											/>
										</div>

										<PrimaryButton type="submit" className="w-full text-white bg-fatePrimary hover:bg-fatePrimary/90 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
											Request Callback
										</PrimaryButton>
										<div className=" text-xs text-center font-medium text-gray-700 dark:text-white">Expect to receive call from us between 9:00 to 17:00 during workdays.</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	);
};

export default Navbar;
