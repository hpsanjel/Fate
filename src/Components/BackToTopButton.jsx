import React, { useEffect, useState } from "react";

const BackToTopButton = () => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 400) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			{isVisible && (
				<button
					className="fixed bottom-5 right-5 z-50 bg-fatePrimary text-white p-2 sm:p-4 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<span className="sr-only">Back to top</span>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="block" viewBox="0 0 16 16">
						<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z" />
					</svg>
				</button>
			)}
		</>
	);
};

export default BackToTopButton;
