import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<>
			<footer className="footer-content mt-12 p-8 flex flex-col bg-teal-900">
				<div className="container grid grid-cols-1 justify-items-center md:grid-cols-2 md:text-left md:justify-items-end">
					{/* <!-- Footer-left --> */}
					<div className="flex flex-col pb-4 space-y-3 text-center items-center justify-center md:flex md:text-left md:items-start md:justify-start">
						<a href="/">
							<img src="/images/Fate-Logo.png" width="150px" alt="Fate Logo" />
						</a>

						<p className="text-xs text-white md:w-1/2 lg:w-1/3">Fate International Japanese School Private Limited (FIJS) is the only institute which provides quality Japanese Language Teaching Facilities.</p>
						<div className="social-links flex gap-4 mt-2 text-white">
							<a href="http://www.facebook.com/hpsanjel">
								<i className="bi bi-facebook hover:text-amber-200"></i>
							</a>
							<a href="http://www.facebook.com/hpsanjel">
								<i className="bi bi-youtube  hover:text-amber-200"></i>
							</a>
							<a href="http://www.facebook.com/hpsanjel">
								<i className="bi bi-instagram  hover:text-amber-200"></i>
							</a>
							<a href="http://www.facebook.com/hpsanjel">
								<i className="bi bi-linkedin  hover:text-amber-200"></i>
							</a>
						</div>
					</div>

					{/* <!-- Footer-right --> */}

					<div className="flex mt-2">
						<ul className="flex space-x-4 text-white text-xs">
							<li className=" hover:text-amber-200">
								<Link to="/">Home</Link>
							</li>
							<li className=" hover:text-amber-200">
								<Link to="/about">About Us</Link>
							</li>

							<li className=" hover:text-amber-200">
								<Link to="/services">Services</Link>
							</li>
							<li className=" hover:text-amber-200">
								<Link to="/contact">Contact Us</Link>
							</li>
						</ul>
					</div>
				</div>
				{/* <p>&copy; {new Date().getFullYear()} Fate. All rights reserved.</p> */}
			</footer>
		</>
	);
};

export default Footer;
