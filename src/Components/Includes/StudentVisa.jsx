import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, CheckCircle, Users, FileText } from "lucide-react";

const StudentVisaPage = () => {
	const [expandedFaq, setExpandedFaq] = useState(null);

	const toggleFaq = (index) => {
		setExpandedFaq(expandedFaq === index ? null : index);
	};

	return (
		<div className="min-h-screen text-gray-800">
			{/* Hero Section */}
			<section className="relative h-max flex items-center bg-fatePrimary/10 py-12 justify-center overflow-hidden">
				<div className="relative z-10 text-center">
					<h1 className="text-5xl   mb-4">Your Journey to Japan Starts Here</h1>
					<p className="text-xl mb-8">Navigate the Student Visa Process with Ease</p>
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-fateSecondaryDark text-white px-8 py-3 rounded-full text-lg shadow-lg">
						Start Your Application
					</motion.button>
				</div>
			</section>

			{/* Timeline Section */}
			<section className=" bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl   pt-24 text-center">Visa Application Timeline</h2>
					<div className="relative py-12">
						{[
							{ title: "School Application", description: "Apply to your chosen Japanese institution" },
							{ title: "CoE Application", description: "School applies for your Certificate of Eligibility" },
							{ title: "CoE Issuance", description: "Receive your Certificate of Eligibility" },
							{ title: "Visa Application", description: "Apply for your student visa at the Japanese embassy" },
							{ title: "Visa Issuance", description: "Receive your student visa" },
							{ title: "Departure to Japan", description: "Start your journey to Japan!" },
						].map((step, index) => (
							<div key={index} className="flex mb-8 items-center">
								<div className="flex-shrink-0 w-12 h-12 rounded-full bg-fatePrimary/80 text-white flex items-center justify-center   text-xl">{index + 1}</div>
								<div className="ml-4 flex-grow">
									<h3 className="text-xl   ">{step.title}</h3>
									<p className="text-gray-600">{step.description}</p>
								</div>
							</div>
						))}
						<div className="absolute left-6 top-0 bottom-0 w-0.5 -z-10 bg-fatePrimary/10" />
					</div>
				</div>
			</section>

			{/* Success Stories Section */}
			<section className=" bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl   mb-12 text-center">Success Stories</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ name: "Sophia", university: "Tokyo University", quote: "I never thought studying in Japan would be possible, but here I am!" },
							{ name: "Liam", university: "Kyoto University", quote: "The visa process was smooth thanks to the consultancy's guidance." },
							{ name: "Emma", university: "Osaka University", quote: "From application to arrival, every step was well-supported." },
						].map((story, index) => (
							<motion.div key={index} whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
								<div className="flex items-center mb-4">
									<div className="w-12 h-12 bg-fateSecondaryLight/50 rounded-full flex items-center justify-center text-fatePrimary   text-xl">{story.name[0]}</div>
									<div className="ml-4">
										<h3 className="   text-lg">{story.name}</h3>
										<p className="text-gray-600">{story.university}</p>
									</div>
								</div>
								<p className="text-gray-700 italic">"{story.quote}"</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Visa Support Services Section */}
			<section className="pb-20  bg-white">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl   pt-20 mb-12 text-center">Our Visa Support Services</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{[
							{ icon: FileText, title: "Document Preparation", description: "We'll help you prepare all necessary documents for your visa application." },
							{ icon: Users, title: "Interview Preparation", description: "Get ready for your visa interview with our mock interview sessions." },
							{ icon: CheckCircle, title: "Application Review", description: "Our experts will review your application to ensure everything is perfect." },
						].map((service, index) => (
							<motion.div key={index} whileHover={{ y: -10 }} className="bg-pink-50 p-6 rounded-lg shadow-md mb-16">
								<service.icon size={48} className="text-fatePrimary mb-4" />
								<h3 className="text-xl    mb-2">{service.title}</h3>
								<p className="text-gray-700">{service.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className=" bg-gray-100">
				<div className="container mx-auto px-4">
					<h2 className="text-4xl   py-12 text-center">Frequently Asked Questions</h2>
					<div className="space-y-4 max-w-2xl flex flex-col mx-auto mb-16">
						{[
							{ question: "How long does the student visa process take?", answer: "The entire process, from school application to visa issuance, typically takes 3-6 months." },
							{ question: "Can I work part-time with a student visa in Japan?", answer: "Yes, you can work up to 28 hours per week with a student visa, after obtaining permission from the immigration office." },
							{ question: "What documents do I need for a student visa application?", answer: "Key documents include your passport, Certificate of Eligibility, admission letter, and proof of financial support." },
						].map((faq, index) => (
							<div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
								<button className="w-full text-left p-4 focus:outline-none" onClick={() => toggleFaq(index)}>
									<div className="flex justify-between items-center">
										<span className=" text-lg">{faq.question}</span>
										<ChevronDown size={24} className={`transform transition-transform ${expandedFaq === index ? "rotate-180" : ""}`} />
									</div>
								</button>
								{expandedFaq === index && (
									<div className="p-4 bg-pink-50">
										<p className="text-gray-700">{faq.answer}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Call-to-Action Section */}
			<section className="py-20 bg-fateSecondaryDark">
				<div className="container mx-auto px-4 text-center bg-fateSecondaryDark">
					<h2 className="text-4xl text-black  mb-4">Ready to Start Your Japanese Adventure?</h2>
					<p className="text-xl text-black mb-8">Let us guide you through the visa process and make your dream of studying in Japan a reality.</p>
					<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-fatePrimary text-white px-8 py-3 rounded-full    text-lg shadow-lg">
						Contact Us Today
					</motion.button>
				</div>
			</section>
		</div>
	);
};

export default StudentVisaPage;
