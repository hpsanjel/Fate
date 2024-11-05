import React from "react";
import SectionHeader from "../../Includes/SectionHeader";

const LanguageclassNamees = () => {
	return (
		<>
			{" "}
			<SectionHeader firstline="Why Study in Japan" firstheading="Language Classes" shortdesc="Get to know more why Japan might be your best destination for study, work and live" />
			<div className="">
				<h1 className="text-3xl text-fatePrimary mb-4">Language Classes</h1>
				<table className="mx-auto w-full table-auto border-collapse mb-12 ">
					<thead>
						<tr className="rounded-lg text-sm font-medium text-gray-700 text-left">
							<th className="px-4 py-2 bg-gray-200 bg-white/800">SN</th>
							<th className="px-4 py-2 bg-gray-200 bg-white/800">Course</th>
							<th className="px-4 py-2 bg-gray-200 bg-white/800">Duration</th>
							<th className="px-4 py-2 bg-gray-200 bg-white/800">Teaching Hours</th>
							<th className="px-4 py-2 bg-gray-200 bg-white/800">Fee</th>
							<th className="px-4 py-2 bg-gray-200 bg-white/800">Remarks</th>
						</tr>
					</thead>
					<tbody className="text-sm font-normal text-gray-700">
						<tr className="hover:bg-gray-100 border-b border-gray-200 py-10">
							<td className="px-4 py-4">1</td>
							<td className="px-4 py-4"> Basic Level </td>
							<td className="px-4 py-4"> 1 year (4 semesters)</td>
							<td className="px-4 py-4"> 90 min/day </td>
							<td className="px-4 py-4"> 4500/per semester </td>
							<td className="px-4 py-4"> able to participate for JLPT N5 & N4 level</td>
						</tr>
						<tr className="hover:bg-gray-100 border-b border-gray-200 py-4">
							<td className="px-4 py-4">2</td>
							<td className="px-4 py-4"> Intermediate Level </td>
							<td className="px-4 py-4"> 3 months (1 semester)</td>
							<td className="px-4 py-4"> 90 min/day </td>
							<td className="px-4 py-4"> 5500/per semester </td>
							<td className="px-4 py-4"> able to participate for JLPT N3 level</td>
						</tr>
						<tr className="hover:bg-gray-100  border-gray-200">
							<td className="px-4 py-4">3</td>
							<td className="px-4 py-4"> Advance Level </td>
							<td className="px-4 py-4"> 9 months (3 semesters)</td>
							<td className="px-4 py-4"> 90 min/day </td>
							<td className="px-4 py-4"> 6500/per semester </td>
							<td className="px-4 py-4"> able to participate for JLPT N2 level</td>
						</tr>
					</tbody>
				</table>
				<div className="language-wrapper">
					<div className="private mb-16">
						<h1 className="text-3xl text-fatePrimary mb-4">Private Classes</h1>
						<div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-12 bg-fatePrimary/10">
							<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
								<i className="bi bi-calendar-range sm:text-5xl text-3xl mb-2 "></i>
								<h3 className="text-lg font-medium">Duration</h3>
								<p>As per your demand</p>
								{/* <p>1 week</p> */}
							</div>
							<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
								<i className="bi bi-hourglass sm:text-5xl text-3xl mb-2 "></i>
								<h3 className="text-lg font-medium">Teaching Hours</h3>
								<p>60 min/day</p>
								{/* <p>180 min/day</p> */}
							</div>
							<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
								<i className="bi bi-clock sm:text-5xl text-3xl mb-2 "></i>
								<h3 className="text-lg font-medium">Class Time</h3>
								<p>Negotiable</p>
								{/* <p>7 am to 10 am</p> */}
							</div>
							<div className="flex flex-col items-center gap-y-1 hover:text-fatePrimary/90">
								<i className="bi bi-cash-coin sm:text-5xl text-3xl mb-2 "></i>
								<h3 className="text-lg font-medium">Fee</h3>
								<p>5000/month</p>
								{/* <p>Free</p> */}
							</div>
						</div>
					</div>

					<div className="private mb-16">
						<h1 className="text-3xl text-fatePrimary mb-4">Language Approach and Processing</h1>
						<div className="grid gap-4 grid-cols-1 items-center sm:grid-cols-2 p-12 bg-fatePrimary/10">
							<div className="mr-8">
								<p>
									Japanese is written in a mixture of Hiragana, Katakana and Kanji. The Japanese initially adopted Chinese writing script for its written language. However, over time, Chinese character (Kanji) were supplemented by two other types of scripts were developed. Hiragana and Katakana are both syllabicated, where each character is representative of a syllable. The education training process with as an aspect of social interaction with the view of the institution as a social group. The institution with the preliminary perspectives and designs the study course on the basis of student's requirement. <br /> <br />
									Many students begin with an approach to study module, but all modules fully integrate guidance on study skills with study of the subject. Teaching methods includes talks, discussion, group work, visits, videos and presentations. The content and format of your Japanese training course will depend on your profession, proficiency in Japanese and objectives. Whether beginner, survival, intermediate or advanced, we provide satisfaction and confidence at any of your areas you meet.
								</p>
							</div>
							<div className="bg-white rounded-xl">
								<div className="text-center font-semibold mt-6">Who should attend our Japanese Classes</div>
								<div className="grid grid-cols-2 gap-8 m-4 p-4  justify-items-center place-items-center text-sm">
									<div className="bg-fatePrimary/10 w-full h-40 p-4 rounded-2xl"> Anyone planning to relocate to Japan and attend a Japanese course in order to prepare in advance for their assignment.</div>
									<div className="bg-fatePrimary/10 w-full h-40 p-4 rounded-2xl"> Those who are planning to go and work in Japan.</div>
									<div className="bg-fatePrimary/10 w-full h-40 p-4 rounded-2xl"> Government and non governmental agency representatives working in Japan who needs to be able to communicate at all levels.</div>
									<div className="bg-fatePrimary/10 w-full h-40 p-4 rounded-2xl"> Tourist guide professionals, hotel and restaurant workers.</div>
								</div>
							</div>
						</div>
					</div>

					<div className=" flex bg-gray-200 py-8">
						<div className="w-1/2 px-20 py-4">
							<span className="text-3xl block text-center mb-4">Achievement through our course</span>
							Demonstrate goodwill and facilitate international communication at both a personal and organizational level. Build report and strengthen relationship with Japanese speaking colleagues and clients through a show of interest in the Japanese language and culture. By the end of your studies you will be well setup to use your knowledge if Japanese language and culture in the work place.
						</div>
						<div className="w-1/2 px-20 py-4">
							<span className="text-3xl block text-center mb-4">Class and its environment</span>
							Classes are small, giving you plenty of time with our highly qualified instructor. As part of programmed, you have the option to study four weeks, a semester or even a year. This is a great opportunity to experience Japanese language and culture first hand. Course manual and medium will be in English, Nepali and Japanese.
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default LanguageclassNamees;
