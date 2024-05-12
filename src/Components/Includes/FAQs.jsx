import React from "react";
import SectionHeader from "./SectionHeader";

const FAQs = () => {
	return (
		<>
			<SectionHeader firstline="Why Study in Japan" firstheading="FAQs" shortdesc="Get to know more why Japan might be your best destination for study, work and live" />

			<div className="container py-10 grid md:grid-cols-2">
				<div className="w-full grid space-y-6 m-4">
					<details className="group border-s-4 border-fatePrimary bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden" open>
						<summary className="flex cursor-pointer items-center justify-between gap-1.5">
							<h2 className="text-lg font-medium text-gray-900">Who should attend our Japanese school?</h2>

							<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
								</svg>
							</span>
						</summary>

						<ul className="mt-4 leading-relaxed text-gray-700 space-y-3">
							<li>Anyone planning to relocate to Japan and attend a Japanese course in order to prepare in advance for their assignment.</li>
							<li>Those who are planning to go and work in Japan.</li>
							<li>Government and non governmental agency representatives working in Japan who needs to be able to communicate at all levels.</li>
							<li>Tourist guide professionals, hotel and restaurant workers.</li>
							<li>The content and format of your Japanese training course will depend on your profession, proficiency in Japanese and objectives. Whether beginner, survival, intermediate or advanced, we provide satisfaction and confidence at any of your areas you meet.</li>
						</ul>
					</details>

					<details className="group border-s-4 border-fatePrimary bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
						<summary className="flex cursor-pointer items-center justify-between gap-1.5">
							<h2 className="text-lg font-medium text-gray-900">What can one achieve through your courses?</h2>

							<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
								</svg>
							</span>
						</summary>

						<ul className="mt-4 leading-relaxed text-gray-700 space-y-3">
							<li>Demonstrate goodwill and facilitate international communication at both a personal and organizational level.</li>
							<li>Build report and strengthen relationship with Japanese speaking colleagues and clients through a show of interest in the Japanese language and culture.</li>
							<li>By the end of your studies you will be well setup to use your knowledge if Japanese language and culture in the work place.</li>
						</ul>
					</details>

					<details className="group border-s-4 border-fatePrimary bg-gray-50 p-4 [&_summary::-webkit-details-marker]:hidden">
						<summary className="flex cursor-pointer items-center justify-between gap-1.5">
							<h2 className="text-lg font-medium text-gray-900">How is the class environment at Fate?</h2>

							<span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
								<svg xmlns="http://www.w3.org/2000/svg" className="size-5 shrink-0 transition duration-300 group-open:-rotate-45" viewBox="0 0 20 20" fill="currentColor">
									<path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
								</svg>
							</span>
						</summary>

						<ul className="mt-4 leading-relaxed text-gray-700 space-y-3">
							<li>Classes are small, giving you plenty of time with our highly qualified instructor.</li>
							<li>As part of programmed, you have the option to study four weeks, a semester or even a year.</li>
							<li>This is a great opportunity to experience Japanese language and culture first hand. - Course manual and medium will be in English, Nepali and Japanese.</li>
						</ul>
					</details>
				</div>
			</div>
		</>
	);
};

export default FAQs;
