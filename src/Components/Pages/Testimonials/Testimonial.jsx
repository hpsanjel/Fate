import React from "react";
import { useState, useEffect } from "react";
import Banner from "../../Includes/Banner";
import SectionHeader from "../../Includes/SectionHeader";
import CallToAction2 from "../../Includes/CallToAction2";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonial = () => {
	const [testimony, setTestimony] = useState({});
	const [testimonials, setTestimonials] = useState([]);
	const [loading, setLoading] = useState(true);

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};

	const handleTestimony = (e) => {
		setTestimony({ ...testimony, [e.target.name]: e.target.value });
	};

	const handleSubmitTestimony = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/addTestimonial`, {
				method: "POST",
				body: JSON.stringify(testimony),
				headers: { "Content-Type": "application/json" },
			});
		} catch (error) {
			console.error("Error:", error);
		}
	};

	// const getTestimonials = async () => {
	// 	try {
	// 		const response = await fetch("http://localhost:8083/getTestimonials", {
	// 			method: "GET",
	// 		}).then(response => response.json)
	// 		setLoading(false);
	// 	} catch (error) {
	// 		setTestimonials(response);
	// 		console.error("Error fetching testimonials:", error);
	// 	}
	// };

	// useEffect(() => {
	// 	getTestimonials();
	// }, []);

	const pageTitle = "Testimonials";
	const breadcrumbs = ["Home", "Testimonials"];
	const bgimage = 'url("/images/headerbanner.png")';

	return (
		<>
			<Banner pageTitle={pageTitle} breadcrumbs={breadcrumbs} bgimage={bgimage} />
			<SectionHeader firstline="What others say about us" firstheading={pageTitle} shortdesc="These are few of the motivating lines from our past students" />

			{/* <div className=" w-1/4 bg-slate-100 m-4 p-4">
				<form onSubmit={handleSubmitTestimony} action="POST">
					Name <input name="name" value={testimony.name} onChange={handleTestimony} type="text"></input>
					Testimony <input name="testimony" value={testimony.testimony} onChange={handleTestimony} type="text"></input>
					Date <input name="date" value={testimony.date} onChange={handleTestimony} type="date"></input>
					<button className="btn primary-btn">Save Testimony</button>
				</form>
			</div> */}

			<div className=" testimonials- gap-4 grid grid-cols-1 justify-items-center md:grid-cols-3 md:gap-8 lg:gap-12">
				{testimonialsData.map((testimonial) => (
					<div key={Math.random()} className="relative group bg-slate-200 mt-12 border border-slate-100 p-8 rounded-lg hover:scale-95">
						<img src={testimonial.photo} alt={testimonial.name} className="absolute -top-8 left-44 ring-1 ring-fatePrimary bg-white p-1 rounded-full w-[80px] h-[80px] object-cover group-hover:scale-125" />

						<p className=" mt-12">{testimonial.text}</p>
						<hr className="my-4 text-black-900" />

						<h3 className="font-bold">{testimonial.name}</h3>
						<p className="text-sm">{testimonial.position}</p>
					</div>
				))}
			</div>

			<CallToAction2 />
		</>
	);
};

export default Testimonial;

const testimonialsData = [
	{
		name: "John Doe",
		photo: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww",
		text: "I have been amazed by the outstanding service of this company. They exceeded my expectations in every way!",
		position: "Senior Data Engineer",
	},
	{
		name: "Jane Smith",
		photo: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
		text: "I highly recommend this team. They are not only experts in their field but also incredibly responsive and a pleasure to work with.",
		position: "Senior Data Scientist",
	},
	{
		name: "Bob Johnson",
		photo: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
		text: "These guys know their stuff! I couldn’t be happier with the results and the level of support they provide.",
		position: "Senior Software Engineer",
	},
];
