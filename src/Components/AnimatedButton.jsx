import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const AnimatedButton = () => {
	const buttonRef = useRef(null);

	useEffect(() => {
		const button = buttonRef.current;

		const hoverAnimation = gsap.timeline({ paused: true });

		hoverAnimation.to(button, {
			duration: 0.3,
			scale: 1.2,
			backgroundColor: "#4CAF50", // Green color
			boxShadow: "0 0 20px rgba(0, 0, 0, 0.2)",
			ease: "power2.out",
		});

		hoverAnimation.to(
			button,
			{
				duration: 0.3,
				scale: 1,
				backgroundColor: "#2196F3", // Blue color
				boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
				ease: "power2.out",
			},
			"-=0.3" // Overlapping the animations
		);

		const handleMouseEnter = () => {
			hoverAnimation.play();
		};

		const handleMouseLeave = () => {
			hoverAnimation.reverse();
		};

		button.addEventListener("mouseenter", handleMouseEnter);
		button.addEventListener("mouseleave", handleMouseLeave);

		return () => {
			// Cleanup event listeners on component unmount
			button.removeEventListener("mouseenter", handleMouseEnter);
			button.removeEventListener("mouseleave", handleMouseLeave);
		};
	}, []);

	return (
		<button ref={buttonRef} className="animated-button">
			Hover Me
		</button>
	);
};

export default AnimatedButton;
