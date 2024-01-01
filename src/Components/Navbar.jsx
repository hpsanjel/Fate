import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const navRef = useRef();

	const showNavBar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	useEffect(() => {
		const handleScroll = () => {
			const navbar = document.getElementById("stickyheader");
			const offset = window.innerHeight;

			const scrollPos = window.scrollY;

			if (scrollPos >= offset) {
				navbar.classList.add("fixed", "top-0", "z-50", "w-full");
			} else {
				navbar.classList.remove("fixed", "top-0", "z-50", "w-full");
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div className="bg-teal-900 py-2 sticky top-0">
				<div className="flex container">
					<i className="bi bi-phone text-white"></i>&nbsp;<p className=" text-gray-300">9851000735</p> &nbsp;&nbsp;&nbsp;&nbsp;
					<i className="bi bi-envelope text-white"></i>&nbsp;<p className="text-gray-300">info@fate.edu.np</p>
				</div>
			</div>
			<header id="stickyheader">
				<div className="container flex items-center">
					<div className="logo">
						<Link to="/">
							<img src="/images/Fate-Logo.png" alt="Fate Logo" />
						</Link>
					</div>
					<nav ref={navRef}>
						<Link to="/" onClick={showNavBar}>
							Home
						</Link>
						<Link to="/about" onClick={showNavBar}>
							About
						</Link>
						<Link to="/destination" onClick={showNavBar}>
							Destination
						</Link>
						<Link to="/blog" onClick={showNavBar}>
							Blog
						</Link>
						<Link to="/gallery" onClick={showNavBar}>
							Gallery
						</Link>
						<Link to="/testimonial" onClick={showNavBar}>
							Testimonials
						</Link>
						<Link to="/contact" onClick={showNavBar}>
							Contact
						</Link>

						<button className="nav_btn nav_close_btn text-md" onClick={showNavBar}>
							<i className="bi bi-x-square-fill"></i>
						</button>
					</nav>
					<button className="nav_btn pt-2 text-md" onClick={showNavBar}>
						<i className="bi bi-list"></i>
					</button>
				</div>
			</header>
		</>
	);
};

export default Navbar;
